export const fixedColors = {
  white: '#fff',
  black: '#000',
  transparent: 'transparent',
};

const initialThemeColors = {
  // Primary
  primary: 'hsl(0, 0%, 0%)',
  primaryHover: 'hsl(0, 0%, 17%)',
  primaryPress: 'hsla(0, 0%, 60%, 0.5)',
  // Secondary
  secondary: 'hsl(0, 0%, 30%)',
  secondaryHover: 'hsl(0, 0%, 67%)',
  secondaryPress: 'hsl(0, 0%, 60%)',
  // Tertiary
  tertiary: 'hsl(0, 0%, 68%)',
  // Inactive
  inactive: 'hsl(0, 0%, 60%)',
  inactiveBackground: 'hsl(0, 0%, 95%)',
  // Highlight
  highlight: 'hsl(335, 100%, 40%)',
  highlightHover: 'hsl(335, 100%, 37%)',
  highlightPress: 'hsl(335, 100%, 44%)',
  highlightPressContrast: 'hsl(335, 100%, 76%)',
  // Success
  success: 'hsl(154, 72%, 51%)',
  // Error
  critical: 'hsl(0, 72%, 51%)',
  // Contrast
  contrast: 'hsl(0, 0%, 100%)',
  // Surface
  surface: 'hsl(0, 0%, 96%)',
  // Background
  background: 'hsl(0, 0%, 100%)',
  // Divider
  divider: 'hsl(240, 6%, 90%)',
  dividerHover: 'hsl(240, 5%, 68%)',
  dividerActive: 'hsl(240, 2%, 54%)',
  // Shadows
  shadowColor: 'hsla(0, 0%, 0%, 0.085)',
  shadowColorHover: 'hsla(0, 0%, 0%, 0.04)',
  shadowColorPress: 'hsla(0, 0%, 0%, 0)',
  // skeleton
  skeleton: 'hsl(0, 0%, 77%)',
  skeletonBackground: 'hsl(0, 0%, 88%)',
  // Fixed colors
  ...fixedColors,
};

export type ThemeColors = typeof initialThemeColors;

export const lightThemeColors = initialThemeColors;

export const darkThemeColors: ThemeColors = {
  // Primary
  primary: 'hsl(0, 0%, 100%)',
  primaryHover: 'hsl(0, 0%, 83%)',
  primaryPress: 'hsla(0, 0%, 40%, 0.5)',
  // Secondary
  secondary: 'hsl(0, 0%, 70%)',
  secondaryHover: 'hsl(0, 0%, 33%)',
  secondaryPress: 'hsl(0, 0%, 40%)',
  // Tertiary
  tertiary: 'hsl(0, 0%, 32%)',
  // Inactive
  inactive: 'hsl(0, 0%, 40%)',
  inactiveBackground: 'hsl(0, 0%, 15%)',
  // Highlight
  highlight: 'hsl(335, 100%, 40%)',
  highlightHover: 'hsl(335, 100%, 37%)',
  highlightPress: 'hsl(335, 100%, 44%)',
  highlightPressContrast: 'hsl(335, 100%, 76%)',
  // Success
  success: 'hsl(154, 72%, 51%)',
  // Error
  critical: 'hsl(0, 72%, 51%)',
  // Contrast
  contrast: 'hsl(0, 0%, 10%)',
  // Background
  background: 'hsl(0, 0%, 10%)',
  // Surface
  surface: 'hsl(0, 0%, 14%)',
  // Divider
  divider: 'hsl(240, 6%, 30%)',
  dividerHover: 'hsl(240, 5%, 32%)',
  dividerActive: 'hsl(240, 2%, 46%)',
  // Shadows
  shadowColor: 'hsla(0, 0%, 0%, 0.2)',
  shadowColorHover: 'hsla(0, 0%, 0%, 0.1)',
  shadowColorPress: 'hsla(0, 0%, 0%, 0.05)',
  // Skeleton
  skeleton: 'hsl(0, 0%, 18%)',
  skeletonBackground: 'hsl(0, 0%, 24%)',
  // Fixed colors
  ...fixedColors,
};
