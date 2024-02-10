import { Language, Pages } from '@/definitions/common'

const APP_URL: Record<Language, Pages> = {
  en: {
    HOME: '/en',
    EDITION: '/en/edition',
    POSTS: '/en/posts',
  },
  es: {
    HOME: '/es',
    EDITION: '/es/edición',
    POSTS: '/es/publicaciones',
  },
  fr: {
    HOME: '/fr',
    EDITION: '/fr/édition',
    POSTS: '/fr/des-postes',
  },
  bn: {
    HOME: '/bn',
    EDITION: '/bn/edition',
    POSTS: '/bn/posts',
  },
}

export { APP_URL }
