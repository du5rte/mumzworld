import React from 'react';
import {
  Pressable,
  GestureResponderEvent,
  NativeSyntheticEvent,
  NativeMouseEvent,
  StyleSheet,
  PressableProps,
  Platform,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import useTheme from '@/hooks/useTheme';
import { withEaseOutCirc, withEaseOutExpo, withEaseOutQuad } from '@/styles/timings';
import { interactiveElevationChange } from '@/styles/shadow';

import Icon, { FeatherIconNames } from '../icon';

export const buttonVariants = ['primary', 'secondary', 'highlight'] as const;
export const buttonSizes = ['s', 'm', 'l', 'xl'] as const;
export const buttonIconPositions = ['left', 'right'] as const;
export const buttonShapes = ['square', 'rectangle', 'round', 'circle'] as const;

export type ButtonVariants = (typeof buttonVariants)[number];
export type ButtonSizes = (typeof buttonSizes)[number];
export type ButtonIconPositions = (typeof buttonIconPositions)[number];
export type ButtonShapes = (typeof buttonShapes)[number];

const paddings: Record<ButtonSizes, number> = {
  s: 16,
  m: 18,
  l: 24,
  xl: 32,
};

const sizes: Record<ButtonSizes, number> = {
  s: 40,
  m: 44,
  l: 56,
  xl: 64,
};

const borderRadius: Record<ButtonSizes, number> = {
  s: 10,
  m: 12,
  l: 15,
  xl: 24,
};

const fontSizes: Record<ButtonSizes, number> = {
  s: 14,
  m: 15,
  l: 16,
  xl: 17,
};

const iconSizes: Record<ButtonSizes, number> = {
  s: 18,
  m: 20,
  l: 22,
  xl: 24,
};

export interface ButtonProps extends PressableProps {
  title?: string;
  variant?: ButtonVariants;
  textVariants?: keyof Theme['textVariants'];
  size?: ButtonSizes;
  shape?: ButtonShapes;
  disabled?: boolean;
  float?: boolean;
  color?: string;
  icon?: FeatherIconNames;
  iconPosition?: ButtonIconPositions;
  elevate?: number;
  onPress?: PressableProps['onPress'];
  onPressIn?: PressableProps['onPress'];
  onPressOut?: PressableProps['onPress'];
  onHoverIn?: PressableProps['onHoverIn'];
  onHoverOut?: PressableProps['onHoverOut'];
  sharedTransitionTag?: string;
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'm',
    shape = 'rectangle',
    disabled,
    title,
    icon,
    iconPosition = 'left',
    elevate,
    onPress,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    sharedTransitionTag,
    // ...rest
  } = props;

  const theme = useTheme();

  const press = useSharedValue(false);
  const hover = useSharedValue(false);

  const animatedBackgroundColor = useDerivedValue(() => {
    if (disabled) return withEaseOutExpo(theme.colors.inactiveSurface);
    if (variant === 'primary') {
      return withEaseOutExpo(hover.value ? theme.colors.primaryHover : theme.colors.primary);
    }
    if (variant === 'highlight') {
      return withEaseOutExpo(
        press.value
          ? theme.colors.highlightPress
          : hover.value
            ? theme.colors.highlightHover
            : theme.colors.highlight
      );
    }
    if (variant === 'secondary') {
      return withEaseOutExpo(theme.colors.background);
    }
    return withEaseOutCirc(theme.colors.transparent);
  });

  const animatedTextColor = useDerivedValue(() => {
    if (disabled) return withEaseOutQuad(theme.colors.inactive);

    if (variant === 'highlight') {
      return withEaseOutQuad(
        press.value ? theme.colors.highlightInvertPress : theme.colors.primaryInvert
      );
    }
    if (variant === 'secondary') {
      return withEaseOutQuad(
        press.value
          ? theme.colors.secondaryPress
          : hover.value
            ? theme.colors.secondaryHover
            : theme.colors.secondaryInvert
      );
    }
    return withEaseOutQuad(press.value ? theme.colors.primaryPress : theme.colors.primaryInvert);
  });

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: animatedBackgroundColor.value,
      borderRadius: borderRadius[size],
      borderCurve: 'continuous',
      ...((shape === 'square' || shape === 'circle') && {
        width: sizes[size],
      }),
      ...((shape === 'round' || shape === 'circle') && {
        borderRadius: theme.borderRadii.circle,
      }),
      // Needs to have a backgroundColor for the shadow to work on iOS
      ...((variant === 'secondary' || 'elevate' in props) &&
        interactiveElevationChange(elevate || 10, { press, hover })),
      cursor: 'pointer',
      ...(disabled && {
        cursor: 'auto',
      }),
    };
  });

  const animatedWrapperStyle = useAnimatedStyle(() => {
    return {
      // flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 1,
      flexGrow: 0,
      height: sizes[size],
      ...((shape === 'rectangle' || shape === 'round') && {
        paddingHorizontal: paddings[size],
      }),
      ...((shape === 'square' || shape === 'circle') && {
        width: sizes[size],
      }),
      ...((shape === 'round' || shape === 'circle') && {
        borderRadius: theme.borderRadii.circle,
      }),
      gap: 8,
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      color: animatedTextColor.value,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      fontFamily: 'Inter-Medium',
      ...(Platform.OS === 'web' && {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
      }),
      fontSize: fontSizes[size],
      numberOfLines: 1,
      color: animatedTextColor.value,
      ...(Platform.OS === 'web' && {
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }),
    };
  });

  const handlePress = (event: GestureResponderEvent) => {
    if (onPress) onPress(event);
  };
  const handlePressIn = (event: GestureResponderEvent) => {
    press.value = true;
    if (onPressIn) onPressIn(event);
  };
  const handlePressOut = (event: GestureResponderEvent) => {
    press.value = false;
    if (onPressOut) onPressOut(event);
  };
  const handleHoverIn = (event: NativeSyntheticEvent<NativeMouseEvent>) => {
    hover.value = true;
    if (onHoverIn) onHoverIn(event);
  };
  const handleHoverOut = (event: NativeSyntheticEvent<NativeMouseEvent>) => {
    hover.value = false;
    if (onHoverOut) onHoverOut(event);
  };

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={!disabled ? { selected: true } : {}}
      accessibilityLabel={title}
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      disabled={disabled}
      testID={`button-${variant}${disabled ? '-disabled' : ''}`}>
      <Animated.View style={animatedWrapperStyle}>
        {/**
         * This is a workaround to facilitate the shared transitions
         * separating the background stops content being visible during transition
         */}
        <Animated.View
          style={[StyleSheet.absoluteFill, animatedBackgroundStyle]}
          sharedTransitionTag={sharedTransitionTag}
        />

        {icon && iconPosition === 'left' && (
          <Animated.Text style={animatedIconStyle}>
            <Icon name={icon} size={iconSizes[size]} />
          </Animated.Text>
        )}

        {title && <Animated.Text style={animatedTextStyle}>{title}</Animated.Text>}

        {icon && iconPosition === 'right' && (
          <Animated.Text style={animatedIconStyle}>
            <Icon name={icon} size={iconSizes[size]} />
          </Animated.Text>
        )}
      </Animated.View>
    </Pressable>
  );
}

export default Button;
