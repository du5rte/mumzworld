import { createTheme } from '@shopify/restyle';
import { Platform } from 'react-native';

export const theme = createTheme({
  colors: {
    // Primary
    primary: 'hsl(0, 0%, 0%)',
    primaryInvert: 'hsl(0, 0%, 100%)', // #FFFFFF
    primaryHover: 'hsl(0, 0%, 17%)', // #383838
    primaryPress: 'hsl(0, 0%, 0%)',
    primaryBackgroundPress: 'hsl(0, 0%, 20%)',

    surface: 'hsl(0, 0%, 98%)', // #FAFAFA
    background: 'hsl(0, 0%, 100%)', // #FFFFFF

    // Secondary
    secondary: 'hsl(0, 0%, 40%)',
    secondaryInvert: 'hsl(0, 0%, 0%)',
    secondaryHover: 'hsl(0, 0%, 33%)',
    secondaryPress: 'hsl(0, 0%, 40%)',

    // Tertiary
    tertiary: 'hsl(0, 0%, 68%)', // #ADADAD

    // Inactive
    inactive: 'hsl(0, 0%, 53%)', // #878787
    inactiveSurface: 'hsl(0, 0%, 95%)',

    // Highlight
    highlight: 'hsl(216, 100%, 48%)',
    highlightHover: 'hsl(216, 100%, 45%)',
    highlightPress: 'hsl(216, 100%, 52%)',
    highlightActive: 'hsl(216, 100%, 57%)',
    highlightInvertPress: 'hsl(216, 100%, 83%)',

    // Success
    success: 'hsl(154, 72%, 51%)',
    successDivider: 'hsl(154, 74%, 76%)',

    // Error
    error: 'hsl(0, 72%, 51%)',
    errorDivider: 'hsl(1, 74%, 76%)',

    // Divider
    divider: 'hsl(240, 6%, 83%)', // #EDEDED blended to #D2D2D7 to transitions easier with highlight
    dividerHover: 'hsl(240, 5%, 68%)', // #ADADAD blended to #A9A9B1 to transitions easier with highlight
    dividerActive: 'hsl(240, 2%, 54%)', // #8C8C8C blended to #86868B to transitions easier with highlight

    // Shadows
    shadowColor: 'hsla(0, 0%, 0%, 0.085)',
    shadowColorHover: 'hsla(0, 0%, 0%, 0.04)',
    shadowColorFocus: 'hsla(0, 0%, 0%, 0.04)',
    shadowColorPress: 'hsla(0, 0%, 0%, 0)',

    // Transparent
    transparent: 'transparent',
  },
  spacing: {
    none: 0,
    xxs: 2,
    xs: 4,
    /**
     * used for in-between items
     * 8px
     */
    s: 8,
    /**
     * used for breathing space
     * 12px
     */
    m: 12,
    /**
     * used for wrapping items (side margins)
     * 16px
     */
    l: 16,
    /**
     * used for line breaks
     * 24px
     */
    xl: 24,
    /**
     * used for give items white space (room)
     * 36px
     */
    '2xl': 36,
  },
  borderRadii: {
    none: 0,
    s: 4,
    m: 8,
    circle: 9999,
  },
  /**
   * Inspired by Luke Wroblewski "ergonomic context" tweet
   * @see http://alexbea.com/blog/ergonomic-breakpoint-variables/
   */
  breakpoints: {
    any: 0,
    watch: 162,
    watchwide: 184,
    phone: 320,
    phonewide: 390,
    phonewidest: 428,
    tablet: 768,
    laptop: 1024,
    desktop: 1440,
    desktopwide: 1600,
  },
  /**
   * Inspired by shopify polaris
   * @see https://polaris.shopify.com/design/typography#section-display-styles
   */
  textVariants: {
    /**
     * Inherit by all
     */
    defaults: {
      fontFamily: 'Inter-Regular',
      ...(Platform.OS === 'web' && {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '400',
      }),
      fontSize: 16,
      lineHeight: 24,
    },
    semiBold: {
      fontFamily: 'Inter-medium',
      ...(Platform.OS === 'web' && {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
      }),
      fontSize: 16,
      lineHeight: 24,
    },
    bold: {
      fontFamily: 'Inter-SemiBold',
      ...(Platform.OS === 'web' && {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '600',
      }),
      fontSize: 16,
      lineHeight: 24,
    },
    title: {
      fontFamily: 'Inter-Bold',
      ...(Platform.OS === 'web' && {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '700',
      }),
      fontSize: 32,
      lineHeight: 32,
    },
    subtitle: {
      fontFamily: 'Inter-medium',
      ...(Platform.OS === 'web' && {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
      }),
      fontSize: 20,
      lineHeight: 24,
    },
  },
});

export type Theme = typeof theme;

export type ThemeColors = keyof Theme['colors'];
export type ThemeBorderRadiuses = keyof Theme['borderRadii'];

export const lightTheme = theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    // TODO: add dark theme
  },
};

export const themeVariants = ['light', 'dark'] as const;
export type ThemeVariants = (typeof themeVariants)[number];

export const themes: Record<ThemeVariants, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};

export default theme;
