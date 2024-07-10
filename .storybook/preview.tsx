import React from 'react';
import type { Preview } from '@storybook/react';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from '../tamagui.config';

const preview: Preview = {
  parameters: {
    actions: {
      // argTypesRegex: "^on[A-Z].*"
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;

export const decorators = [
  (Story) => (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={'light'}>
      <Story />
    </TamaguiProvider>
  ),
];
