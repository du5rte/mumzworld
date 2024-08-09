import { withSpring } from 'react-native-reanimated';

/**
 * Quick
 * @see https://github.com/tamagui/tamagui/blob/0f5902e81ee939e9c95fa5c798557f28adb14449/code/core/config/src/animations.ts#L8
 */
export const withQuickSpring: typeof withSpring = (value, config) => {
  'worklet';
  return withSpring(value, {
    mass: 1.2,
    damping: 20,
    stiffness: 250,
  });
};

/**
 * Bouncy
 * @see https://github.com/tamagui/tamagui/blob/0f5902e81ee939e9c95fa5c798557f28adb14449/code/core/config/src/animations.ts#L8
 */
export const withBouncySpring: typeof withSpring = (value, config) => {
  'worklet';
  return withSpring(value, {
    mass: 0.9,
    damping: 9,
    stiffness: 150,
  });
};

/**
 * Lazy
 * @see https://github.com/tamagui/tamagui/blob/0f5902e81ee939e9c95fa5c798557f28adb14449/code/core/config/src/animations.ts#L8
 */
export const withLazySpring: typeof withSpring = (value, config) => {
  'worklet';
  return withSpring(value, {
    damping: 18,
    stiffness: 50,
  });
};
