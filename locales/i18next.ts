import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import { storage } from '@/context/storage';
import en from './en.json';
import ar from './ar.json';

const initialLanguage = storage.getString('language') || getLocales()[0]?.languageCode || 'en';

export const languages = ['en', 'ar'] as const;
export type Language = (typeof languages)[number];

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: initialLanguage,
  resources: {
    en,
    ar,
  },
});
export default i18n;

export function persistLanguageChange(language: Language) {
  storage.set('language', language);
  i18n.changeLanguage(language);
}
