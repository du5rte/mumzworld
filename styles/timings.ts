import { withTiming, Easing } from 'react-native-reanimated';

/**
 * EaseOutExpo: accelerates quickly and then decelerates slowly
 * See more: https://easings.net/#easeOutExpo
 */
export const withEaseOutExpo: typeof withTiming = (value, config) => {
  'worklet';
  return withTiming(value, {
    easing: Easing.out(Easing.exp),
    ...config,
  });
};

/**
 * EaseOutCirc: accelerates moderately and then decelerates slowly
 * See more: https://easings.net/#easeOutCirc
 */
export const withEaseOutCirc: typeof withTiming = (value, config) => {
  'worklet';
  return withTiming(value, {
    easing: Easing.out(Easing.circle),
    ...config,
  });
};

/**
 * EaseOutQuad: accelerates really quickly and then moderately decelerates
 * duration: 200
 * See more: https://easings.net/#easeOutQuad
 */
export const withEaseOutQuad: typeof withTiming = (value, config) => {
  'worklet';
  return withTiming(value, {
    duration: 200,
    easing: Easing.out(Easing.quad),
    ...config,
  });
};

/**
 * EaseOutSin: move very slowly and slow down at the end
 * See more: https://easings.net/#easeOutSin
 */
export const withEaseOutSin: typeof withTiming = (value, config) => {
  'worklet';
  return withTiming(value, {
    easing: Easing.out(Easing.sin),
    ...config,
  });
};
