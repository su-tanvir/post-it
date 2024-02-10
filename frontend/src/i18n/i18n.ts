import { DEFAULT_LANG } from '@/constants/globals'
import i18n, { Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from './LanguageDetector'
import bn from './locales/bn.json'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'

export const defaultNS = ''
export const resources: Resource = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  bn: { translation: bn },
} as const

void i18n
  .use(initReactI18next)
  .use(new LanguageDetector()) // module to detect language
  .init({
    defaultNS: 'translation', // namespace
    fallbackLng: DEFAULT_LANG,
    resources,
    returnNull: false,
    debug: false,
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      escapeValue: false,
    },
    compatibilityJSON: 'v4',
  })

i18n.t = i18n.t.bind(i18n)

document.documentElement.lang = i18n.language

export default i18n
