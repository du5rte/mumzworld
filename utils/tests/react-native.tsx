import React, { PropsWithChildren, ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { Provider as JotaiProvider } from 'jotai';
import { lightTheme } from '@/styles/themes';
import '@/locales/i18next-jest';
import '@testing-library/jest-native/extend-expect';
import store from '@/context/store';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <JotaiProvider store={store}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </JotaiProvider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
