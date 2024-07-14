import { Platform, TextStyle, ViewStyle } from 'react-native';

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
  fontFamily: 'Inter-medium',
  ...(Platform.OS === 'web' && {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
  }),
  fontSize: 17,
  lineHeight: 24,
};
