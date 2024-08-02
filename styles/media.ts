import { createMedia } from '@tamagui/react-native-media-driver';

/**
 * Inspired by Luke Wroblewski "ergonomic context" tweet
 * @see http://alexbea.com/blog/ergonomic-breakpoint-variables/
 */
export const media = createMedia({
  initial: { minWidth: 0 },
  watch: { minWidth: 162 },
  watchwide: { minWidth: 184 },
  phone: { minWidth: 320 },
  phonewide: { minWidth: 390 },
  phonewidest: { minWidth: 428 },
  tablet: { minWidth: 768 },
  laptop: { minWidth: 1024 },
  desktop: { minWidth: 1440 },
  desktopwide: { minWidth: 1600 },
  hoverNone: { hover: 'none' },
  pointerCoarse: { pointer: 'coarse' },
});
