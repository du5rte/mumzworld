import { Appearance, ColorSchemeName } from 'react-native';
import { atomWithAsyncStorage } from './jotai';

export const colorSchemeAtom = atomWithAsyncStorage<ColorSchemeName>(
  'colorScheme',
  Appearance.getColorScheme() || 'light'
);
