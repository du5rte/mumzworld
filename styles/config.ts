import { createTamagui } from '@tamagui/core';

import { fonts } from './fonts';
import { tokens } from './tokens';
import { media } from './media';
import { animations } from './animations';
import { lightTheme, darkTheme } from './themes2';

export const config = createTamagui({
  fonts,
  tokens,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  media,
  animations,
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
