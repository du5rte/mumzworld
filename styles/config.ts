import { createTamagui } from '@tamagui/core';

import { fonts } from './fonts';
import { tokens } from './tokens';
import { media } from './media';

export const config = createTamagui({
  fonts,
  tokens,
  themes: {
    light: {
      background: 'hsl(0, 0%, 100%)',
      primary: 'hsl(0, 0%, 0%)',
      secondary: 'hsl(0, 0%, 30%)',
    },
    dark: {
      background: 'hsl(0, 0%, 10%)',
      primary: 'hsl(0, 0%, 100%)',
      secondary: 'hsl(0, 0%, 70%)',
      // color: tokens.color.white,
    },
  },
  media,
  shorthands: {
    f: 'flex',
    m: 'margin',
    w: 'width',
    c: 'color',
    bg: 'backgroundColor',
    br: 'borderRadius',
    bc: 'borderColor',
  } as const,
  settings: {
    allowedStyleValues: 'somewhat-strict',
    autocompleteSpecificTokens: 'except-special',
  },
});
