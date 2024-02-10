import { ALL_LANG } from '@/constants/globals'
import { Language } from '@/definitions/common'
import { Module, Services } from 'i18next'

const fromPath = (): string => {
  if (typeof window !== 'undefined') {
    const language = window.location.pathname.match(/^\/([a-zA-Z]+)/)
    if (Array.isArray(language)) {
      return language[1]
    }
  }
  return ''
}

const fromBrowser = (): string => {
  if (typeof navigator !== 'undefined') {
    if (navigator.languages) {
      const userLang = navigator.language || navigator.userLanguage // lang_REGION: es-ES
      return userLang.substring(0, 2)
    }
  }
  return ''
}

// const languageDetector = (): LanguageDetectorModule => ({
//   type: 'languageDetector',
//   init: () => {},
//   cacheUserLanguage: () => {},
//   detect: () => {
//     return [fromPath(), fromBrowser()].filter(
//       (lang: string) => ALL_LANG.indexOf(lang as Language) >= 0
//     )
//   },
// })

class LanguageDetector implements Module {
  type: 'languageDetector'
  services: Services | undefined

  constructor(services?: Services) {
    this.type = 'languageDetector'
    this.init(services)
  }

  init(services?: Services) {
    this.services = services
  }

  // cacheUserLanguage() {}

  detect() {
    return [fromPath(), fromBrowser()].filter((lang) =>
      ALL_LANG.includes(lang as Language)
    )
  }
}

export default LanguageDetector
