import path from 'path';
import { StorybookConfig } from '@storybook/react-webpack5';

const main: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-react-native-web',
    '@storybook/addon-webpack5-compiler-babel',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        // To fix @storybook/test trying to import Node.js modules
        // For more details: https://github.com/storybookjs/storybook/issues/26997
        '@storybook/test': path.resolve(
          __dirname,
          '../node_modules/@storybook/test/dist/index.mjs'
        ),
        // To match typescript path alias
        '@': path.resolve(__dirname, '../'),
      },
    };

    return config;
  },
};

export default main;
