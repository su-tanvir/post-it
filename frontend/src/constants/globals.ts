import { Language } from '@/definitions/common'

export const APP_NAME = 'Post It'

export enum APP_LANGUAGE_CODE {
  English = 'en',
  Spanish = 'es',
  French = 'fr',
  Bangla = 'bn',
}

export const ALL_LANG = ['en', 'es', 'fr', 'bn'] as const
// export const ALL_LANG = Object.values(APP_LANGUAGE_CODE)

export const DEFAULT_LANG: Language = APP_LANGUAGE_CODE.English
