import React from 'react';
import { GestureResponderEvent } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import { withFastTiming } from '@/styles/timings';
import useTheme from '@/hooks/useTheme';
import Text, { TextProps } from '../text';
import { withQuickSpring } from '@/styles/springs';

const AnimatedText = Animated.createAnimatedComponent(Text);

export const textButtonVariants = ['primary', 'secondary', 'highlight'] as const;
export type TextButtonVariants = (typeof textButtonVariants)[number];

export interface TextButtonProps extends Omit<TextProps, 'variant'> {
  variant?: TextButtonVariants;
  textVariant?: TextProps['variant'];
  disabled?: boolean;
}

export function TextButton(props: TextButtonProps) {
  const {
    variant = 'highlight',
    textVariant,
    disabled,
    children,
    onPress,
    onPressIn,
    onPressOut,
    ...rest
  } = props;

  const theme = useTheme();

  const press = useSharedValue(false);

  const animatedStyle = useAnimatedStyle(() => {
    const { colors } = theme;

    const variantColors: Record<TextButtonVariants, string> = {
      primary: press.value ? colors.primaryPress : colors.primary,
      secondary: press.value ? colors.secondaryPress : colors.secondary,
      highlight: press.value ? colors.highlightPress : colors.highlight,
    };

    return {
      color: withFastTiming(disabled ? colors.inactive : variantColors[variant]),
      transform: [{ scale: withQuickSpring(press.value ? 0.95 : 1) }],
    };
  });

  const handlePressIn = (event: GestureResponderEvent) => {
    press.value = true;
    if (onPressIn) onPressIn(event);
  };
  const handlePressOut = (event: GestureResponderEvent) => {
    press.value = false;
    if (onPressOut) onPressOut(event);
  };

  return (
    <AnimatedText
      fontSize={18}
      variant={textVariant}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={animatedStyle}
      suppressHighlighting={true}
      {...rest}>
      {children}
    </AnimatedText>
  );
}

export default TextButton;
