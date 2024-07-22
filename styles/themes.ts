import { createTheme } from '@shopify/restyle';
import { Platform } from 'react-native';

export const theme = createTheme({
  colors: {
    surface: 'hsl(0, 0%, 96%)', // #FAFAFA
    background: 'hsl(0, 0%, 100%)', // #FFFFFF
    backgroundBottomNavbar: 'hsl(0, 0%, 0%)',

    // Primary
    primary: 'hsl(0, 0%, 0%)',
    primaryInvert: 'hsl(0, 0%, 100%)', // #FFFFFF
    primaryHover: 'hsl(0, 0%, 17%)', // #383838
    primaryPress: 'hsla(0, 0%, 60%, 0.5)',
    primaryBackgroundPress: 'hsl(0, 0%, 20%)',

    // Secondary
    secondary: 'hsl(0, 0%, 30%)', // Lightened
    secondaryInvert: 'hsl(0, 0%, 0%)', // Inverted
    secondaryHover: 'hsl(0, 0%, 67%)', // Lightened
    secondaryPress: 'hsl(0, 0%, 60%)', // Lightened

    // Tertiary
    tertiary: 'hsl(0, 0%, 68%)', // #ADADAD

    // Inactive
    inactive: 'hsl(0, 0%, 60%)', // #878787
    inactiveSurface: 'hsl(0, 0%, 95%)',

    // Highlight
    highlight: 'hsl(335, 100%, 40%)', // #C30045 Brand color
    highlightHover: 'hsl(335, 100%, 37%)',
    highlightPress: 'hsl(335, 100%, 44%)',
    highlightActive: 'hsl(335, 100%, 49%)',
    highlightInvertPress: 'hsl(335, 100%, 76%)',

    // Success
    success: 'hsl(154, 72%, 51%)',

    // Error
    error: 'hsl(0, 72%, 51%)',

    // Divider
    divider: 'hsl(240, 6%, 90%)', // #EDEDED blended to #D2D2D7 to transitions easier with highlight
    dividerHover: 'hsl(240, 5%, 68%)', // #ADADAD blended to #A9A9B1 to transitions easier with highlight
    dividerActive: 'hsl(240, 2%, 54%)', // #8C8C8C blended to #86868B to transitions easier with highlight

    // Shadows
    shadowColor: 'hsla(0, 0%, 0%, 0.085)',
    shadowColorHover: 'hsla(0, 0%, 0%, 0.04)',
    shadowColorFocus: 'hsla(0, 0%, 0%, 0.04)',
    shadowColorPress: 'hsla(0, 0%, 0%, 0)',

    // skeleton
    skeleton: 'hsl(0, 0%, 77%)',
    skeletonBackground: 'hsl(0, 0%, 88%)',

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
    l: 15,
    xl: 24,
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
      color: 'primary',
      fontSize: 16,
      lineHeight: 24,
    },
    header: {
      fontFamily: 'Inter-Medium',
      ...(Platform.OS === 'web' && {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
      }),
      fontSize: 20,
      lineHeight: 24,
    },
    title: {
      fontFamily: 'Inter-Medium',
      ...(Platform.OS === 'web' && {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
      }),
      fontSize: 16,
      lineHeight: 24,
    },
    price: {
      fontFamily: 'NunitoSans-Medium',
      ...(Platform.OS === 'web' && {
        fontFamily: 'NunitoSans, sans-serif',
        fontWeight: 'Medium',
      }),
      color: 'primary',
      fontSize: 16,
      lineHeight: 24,
    },
    info: {
      fontFamily: 'Inter-Medium',
      ...(Platform.OS === 'web' && {
        fontFamily: 'Inter, sans-serif',
        fontWeight: '500',
      }),
      color: 'secondary',
      fontSize: 14,
      lineHeight: 16,
    },
    description: {
      fontSize: 14,
      lineHeight: 20,
    },
    detail: {
      fontSize: 12,
      lineHeight: 16,
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
    background: 'hsl(0, 0%, 10%)', // Darkened from white
    surface: 'hsl(0, 0%, 14%)', // Darkened from light grey

    // Primary
    primary: 'hsl(0, 0%, 100%)', // Lightened
    primaryInvert: 'hsl(0, 0%, 10%)', // Darkened
    primaryHover: 'hsl(0, 0%, 83%)', // Lightened
    primaryPress: 'hsla(0, 0%, 40%, 0.5)',
    primaryBackgroundPress: 'hsl(0, 0%, 80%)', // Lightened

    // Secondary
    secondary: 'hsl(0, 0%, 70%)', // Lightened
    secondaryInvert: 'hsl(0, 0%, 100%)', // Lightened
    secondaryHover: 'hsl(0, 0%, 33%)', // Darkened
    secondaryPress: 'hsl(0, 0%, 40%)', // Darkened

    // Tertiary
    tertiary: 'hsl(0, 0%, 32%)', // Darkened

    // Inactive
    inactive: 'hsl(0, 0%, 40%)', // Darkened
    inactiveSurface: 'hsl(0, 0%, 15%)', // Darkened

    // Highlight
    highlight: 'hsl(335, 100%, 40%)', // Unchanged
    highlightHover: 'hsl(335, 100%, 37%)', // Unchanged
    highlightPress: 'hsl(335, 100%, 44%)', // Unchanged
    highlightActive: 'hsl(335, 100%, 49%)', // Unchanged
    highlightInvertPress: 'hsl(335, 100%, 76%)', // Unchanged

    // Success
    success: 'hsl(154, 72%, 51%)', // Unchanged

    // Error
    error: 'hsl(0, 72%, 51%)', // Unchanged

    // Divider
    divider: 'hsl(240, 6%, 30%)', // Darkened
    dividerHover: 'hsl(240, 5%, 32%)', // Darkened
    dividerActive: 'hsl(240, 2%, 46%)', // Darkened

    // Shadows
    shadowColor: 'hsla(0, 0%, 0%, 0.2)', // Adjusted for dark theme
    shadowColorHover: 'hsla(0, 0%, 0%, 0.1)', // Adjusted for dark theme
    shadowColorFocus: 'hsla(0, 0%, 0%, 0.1)', // Adjusted for dark theme
    shadowColorPress: 'hsla(0, 0%, 0%, 0.05)', // Adjusted for dark theme

    // Skeleton
    skeleton: 'hsl(0, 0%, 18%)', // Darkened
    skeletonBackground: 'hsl(0, 0%, 24%)', // Darkened

    // Transparent
    transparent: 'transparent', // Unchanged
  },
};

export const themeVariants = ['light', 'dark'] as const;
export type ThemeVariants = (typeof themeVariants)[number];

export const themes: Record<ThemeVariants, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};
