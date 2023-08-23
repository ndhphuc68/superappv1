// src/localization/i18n.ts
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import vi from './locales/vi.json';

export const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});
