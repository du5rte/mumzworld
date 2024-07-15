import { ThemeProvider } from '@shopify/restyle';
import { DocsContainer } from '@storybook/blocks';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';

import i18n from '../locales/i18next-storybook';
import { darkTheme, lightTheme } from '../styles/themes';

const preview: Preview = {
  parameters: {
    actions: {
      // argTypesRegex: "^on[A-Z].*"
    },
    options: {
      storySort: {
        // Atomic design order
        order: ['Primitives', 'Components', 'Formations'],
      },
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
    i18n,
  },
  globals: {
    locales: {
      en: { icon: '🇺🇸', title: 'English', right: 'EN' },
      ar: { icon: '🇦🇪', title: 'العربية', right: 'AR' },
    },
  },
  tags: ['autodocs'],
};

export default preview;

// Dark theming for story pages
export const decorators = [
  (Story) => (
    <Suspense fallback={<div>loading translations...</div>}>
      <ThemeProvider theme={useDarkMode() ? darkTheme : lightTheme}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </ThemeProvider>
    </Suspense>
  ),
];
