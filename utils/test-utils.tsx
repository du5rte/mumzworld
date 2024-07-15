import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { lightTheme } from '@/styles/themes';
import '@/locales/i18next-jest';
import '@testing-library/jest-native/extend-expect';

const initialMetrics = {
  frame: {
    width: 320,
    height: 640,
    x: 0,
    y: 0,
  },
  insets: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
};

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaProvider initialMetrics={initialMetrics}>{children}</SafeAreaProvider>
    </ThemeProvider>
  );
};

const customRender: typeof render = (ui, options?) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
