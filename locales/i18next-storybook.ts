import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import ar from './ar.json';

i18n
  .use(LanguageDetector) // detect user language
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
      ar,
    },
  });

export default i18n;
