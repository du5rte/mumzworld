import { createTheme } from '@shopify/restyle';

import { lightThemeColors, darkThemeColors } from './colors';
import { radius, spaces } from './tokens';
import { breakpoints } from './breakpoints';
import fonts from './fonts';

export const theme = createTheme({
  colors: lightThemeColors,
  spacing: spaces,
  borderRadii: radius,
  breakpoints: breakpoints,
  textVariants: {
    defaults: {},
    ...fonts,
    unstyled: {},
  },
});

export type Theme = typeof theme;

export const lightTheme = theme;

export const darkTheme: Theme = {
  ...theme,
  colors: darkThemeColors,
};

export const themeVariants = ['light', 'dark'] as const;
export type ThemeVariants = (typeof themeVariants)[number];

export const themes: Record<ThemeVariants, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};
