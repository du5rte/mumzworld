import { Platform, TextStyle, ViewStyle } from 'react-native';
import {
  DefaultTheme as DefaultNavigationTheme,
  DarkTheme as NavigationDarkTheme,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import { darkTheme, lightTheme } from './themes';
import { spaces } from './tokens';

export const headerStyle: ViewStyle = {
  backgroundColor: 'transparent',
  ...Platform.select({
    android: {
      elevation: 0,
    },
    ios: {
      shadowColor: 'transparent',
      shadowOpacity: 0,
      shadowRadius: 0,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },
    default: {
      // https://github.com/necolas/react-native-web/issues/44
      // Material Design
      boxShadow: 'none',
    },
  }),
};

export const headerTitleStyle: TextStyle = {
  fontFamily: 'Inter-Medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  }),
  fontSize: 17,
  lineHeight: 24,
};

export const headerRightContainerStyle: ViewStyle = {
  paddingRight: spaces.xl,
};

export const lightNavigationTheme: NavigationTheme = {
  ...DefaultNavigationTheme,
  colors: {
    ...DefaultNavigationTheme.colors,
    primary: lightTheme.colors.primary,
    background: lightTheme.colors.background,
  },
};

export const darkNavigationTheme: NavigationTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: darkTheme.colors.primary,
    background: darkTheme.colors.background,
  },
};
