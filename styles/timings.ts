import { withTiming, Easing } from 'react-native-reanimated';

/**
 * Fastest
 *
 * EaseOutQuad: accelerates really quickly and then moderately decelerates
 * duration: 200
 * @see https://easings.net/#easeOutQuad
 */
export const withFastestTiming: typeof withTiming = (value, config) => {
  'worklet';
  return withTiming(value, {
    duration: 200,
    easing: Easing.out(Easing.quad),
    ...config,
  });
};

/**
 * Fast
 *
 * EaseOutExpo: accelerates quickly and then decelerates slowly
 * @see https://easings.net/#easeOutExpo
 */
export const withFastTiming: typeof withTiming = (value, config) => {
  'worklet';
  return withTiming(value, {
    duration: 300,
    easing: Easing.out(Easing.exp),
    ...config,
  });
};

/**
 * Medium
 *
 * EaseOutCirc: accelerates moderately and then decelerates slowly
 * @see https://easings.net/#easeOutCirc
 */
export const withMediumTiming: typeof withTiming = (value, config) => {
  'worklet';
  return withTiming(value, {
    duration: 300,

    easing: Easing.out(Easing.circle),
    ...config,
  });
};

/**
 * Slow
 *
 * EaseOutSin: move very slowly and slow down at the end
 * @see https://easings.net/#easeOutSin
 */
export const withSlowTiming: typeof withTiming = (value, config) => {
  'worklet';
  return withTiming(value, {
    duration: 300,
    easing: Easing.out(Easing.sin),
    ...config,
  });
};
