import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import { languageAtom } from '@/context/language-atom';
import { Language } from '@/types/languages';
import store from '@/context/store';
import en from './en.json';
import ar from './ar.json';

export const initialLanguage =
  (store.get(languageAtom) as Language) || getLocales()[0]?.languageCode || 'en';

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
  store.set(languageAtom, language);
  i18n.changeLanguage(language);
}
