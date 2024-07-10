const { getDefaultConfig } = require('expo/metro-config');
const { withTamagui } = require('@tamagui/metro-plugin');

// Tamagui Config
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

// add web support with optimizing compiler + CSS extraction
const tamaguiConfig = withTamagui(config, {
  components: ['tamagui'],
  config: './tamagui.config.ts',
  outputCSS: './tamagui-web.css',
});

module.exports = tamaguiConfig;
