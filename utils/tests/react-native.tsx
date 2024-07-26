import React, { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as JotaiProvider } from 'jotai';
import { lightTheme } from '@/styles/themes';
import '@/locales/i18next-jest';
import '@testing-library/jest-native/extend-expect';
import store from '@/context/store';

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

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <JotaiProvider store={store}>
      <ThemeProvider theme={lightTheme}>
        <SafeAreaProvider initialMetrics={initialMetrics}>{children}</SafeAreaProvider>
      </ThemeProvider>
    </JotaiProvider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
