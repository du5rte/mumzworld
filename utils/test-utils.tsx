import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { lightTheme } from '@/styles/themes';
import '@/locales/i18next-jest';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

const customRender: typeof render = (ui, options?) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
