import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react-native';
import { TamaguiProvider } from 'tamagui';
import config from '@/tamagui.config';

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
};

const customRender: typeof render = (ui, options?) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export { customRender as render };
