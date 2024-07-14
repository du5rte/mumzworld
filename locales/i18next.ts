import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

import en from './en.json';
import ar from './ar.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: getLocales()[0]?.languageCode || 'en',
  resources: {
    en,
    ar,
  },
});
export default i18n;
