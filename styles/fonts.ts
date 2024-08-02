import { createFont } from '@tamagui/core';

const fontSizes = {
  1: 12,
  2: 14,
  3: 16,
  4: 18,
  5: 20,
  6: 24,
  7: 28,
  8: 35,
  9: 60,
};

const lineHeights = {
  1: 16,
  2: 20,
  3: 24,
  4: 26,
  5: 28,
  6: 30,
  7: 36,
  8: 40,
  9: 60,
};

const headingFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size: { ...fontSizes },
  lineHeight: { ...lineHeights },
  weight: {
    1: '500',
  },
  face: {
    400: { normal: 'Inter-Regular' },
    500: { normal: 'Inter-Medium' },
    600: { normal: 'Inter-SemiBold' },
  },
});

const bodyFont = createFont({
  family: 'Inter, Helvetica, Arial, sans-serif',
  size: { ...fontSizes },
  lineHeight: { ...lineHeights },
  weight: {
    1: '400',
  },
  face: {
    400: { normal: 'Inter-Regular' },
    500: { normal: 'Inter-Medium' },
    600: { normal: 'Inter-SemiBold' },
  },
});

const monoFont = createFont({
  family: 'NunitoSans, Helvetica, Arial, sans-serif',
  size: { ...fontSizes },
  lineHeight: { ...lineHeights },
  weight: {
    1: '500',
  },
  face: {
    500: { normal: 'NunitoSans-Medium' },
  },
});

export const fonts = {
  heading: headingFont,
  body: bodyFont,
  mono: monoFont,
};
