import { createTokens } from '@tamagui/core';

import colors from './colors';

// Used for width, height, minWidth, minHeight, maxWidth and maxHeight

export const sizes = {
  xs: 32,
  s: 40,
  m: 44,
  l: 56,
  xl: 64,
};

// Used for margin, padding, gap

export const spaces = {
  xxs: 2,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 36,
};

export const radius = {
  s: 4,
  m: 8,
  l: 16,
  xl: 24,
  round: 100_000,
};

export const tokens = createTokens({
  size: { true: sizes['m'], ...sizes },
  space: { true: sizes['s'], ...spaces },
  color: colors,
  radius: {
    0: 0,
    1: 4,
    2: 8,
    4: 16,
    5: 24,
    9: 100_000,
  },
  zIndex: {
    0: 0,
    1: 100,
    2: 200,
  },
});
