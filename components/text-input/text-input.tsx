import React, { useRef, useImperativeHandle } from 'react';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {
  NativeSyntheticEvent,
  Platform,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextInputFocusEventData,
  StyleSheet,
  I18nManager,
} from 'react-native';

import useTheme from '@/hooks/useTheme';
import Icon from '../icon';
import Button from '../button';
import Box from '../box';

Animated.addWhitelistedNativeProps({
  placeholderTextColor: true,
});

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);

export interface TextInputProps extends Omit<RNTextInputProps, 'style'> {
  inputStyle?: RNTextInputProps['style'];
  disabled?: boolean;
}

function TextInput(props: TextInputProps, ref: React.Ref<RNTextInput | null>) {
  const { disabled, onChangeText, onFocus, onBlur, inputStyle, ...rest } = props;

  const inputRef = useRef<RNTextInput>(null);

  // @see https://reactjs.org/docs/hooks-reference.html#useimperativehandle
  useImperativeHandle(ref, () => inputRef.current);

  const theme = useTheme();

  const text = useSharedValue('');
  const focused = useSharedValue(false);

  const editable = Boolean(disabled) !== true;

  const handleTextChange = (txt: string) => {
    text.value = txt;
    if (onChangeText) {
      onChangeText(txt);
    }
  };

  const handleClear = () => {
    inputRef.current?.clear();
    handleTextChange('');
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    focused.value = true;
    if (onFocus) {
      onFocus(e);
    }
  };
  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    focused.value = false;
    if (onFocus) {
      onFocus(e);
    }
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      borderColor: withTiming(
        text.value.length > 0
          ? 'hsla(0, 0%, 61%, 0.3)'
          : focused.value
            ? 'hsla(0, 0%, 61%, 0.1)'
            : 'hsla(0, 0%, 61%, 0.08)'
      ),
    };
  });

  return (
    <AnimatedBox
      flexDirection="row"
      alignItems="center"
      borderRadius="round"
      borderWidth={6}
      margin="s"
      gap="s"
      {...(I18nManager.isRTL
        ? {
            paddingLeft: 's',
            paddingRight: 'm',
          }
        : {
            paddingLeft: 'm',
            paddingRight: 'xxs',
          })}
      style={animatedStyles}>
      <Icon name="search" size={24} />
      <AnimatedTextInput
        ref={inputRef}
        editable={editable}
        onChangeText={handleTextChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        selectionColor={theme.colors.highlight}
        placeholderTextColor={theme.colors.inactive}
        style={[{ color: theme.colors.primary }, styles.input, animatedStyles]}
        {...rest}
      />
      {text.value.length > 0 && (
        <Animated.View entering={FadeIn.duration(150)} exiting={FadeOut}>
          <Button title="Clear" size="s" shape="round" onPress={handleClear} />
        </Animated.View>
      )}
    </AnimatedBox>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    ...(Platform.OS === 'web' && {
      fontFamily: 'Inter, sans-serif',
      fontWeight: '400',
    }),
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    fontSize: 18,
    height: 44,
  },
});

/**
 * Setting up correct TypeScript Types for Refs
 *
 * @see https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315
 * @see https://stackoverflow.com/questions/60052450/in-react-using-typescript-how-do-i-pass-a-ref-to-a-custom-component-using-reff
 */
const TextInputWithForwardedRef = React.forwardRef<RNTextInput | null, TextInputProps>(TextInput);

export default TextInputWithForwardedRef;
