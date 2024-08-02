import { createTokens } from '@tamagui/core';

const sizes = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 24,
  6: 32,
  7: 40,
  8: 48,
  9: 64,
};

export const tokens = createTokens({
  size: { true: 8, ...sizes },
  space: { true: 8, ...sizes },
  color: {
    white: '#fff',
    black: '#000',
  },
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
