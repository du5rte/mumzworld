import React from 'react';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { DocsContainer } from '@storybook/blocks';
import type { DocsContextProps } from '@storybook/blocks';
import { useDarkMode, DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
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
    // Dark theming for docs pages
    docs: {
      container: (props) => {
        // To fix storybook bug `Unable to access context in docs.container`
        // For more details: https://github.com/hipstersmoothie/storybook-dark-mode/issues/282

        // Replacing storybook-dark-mode's hook:
        // const [isDark, setDark] = React.useState(true);
        const [isDark, setDark] = React.useState(false);

        React.useEffect(() => {
          props.context.channel.on(DARK_MODE_EVENT_NAME, setDark);
          return () => props.context.channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
        }, [props.context.channel]);
        // End of replacing

        return <DocsContainer {...props} theme={isDark ? themes.dark : themes.light} />;
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;

// Dark theming for story pages
export const decorators = [
  (Story) => (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={useDarkMode() ? 'dark' : 'light'!}>
      <Story />
    </TamaguiProvider>
  ),
];
