import { APP_URL } from '@/constants/path'
import { Language, PageType } from '@/definitions/common'

export const getTranslatedUrl = (
  fromLang: Language,
  fromUrl: string,
  toLang: Language
) => {
  const langPages = APP_URL[fromLang]
  const langPageNames = Object.keys(langPages) as PageType[]

  const currentAppPageName = langPageNames.find(
    (page) => langPages[page] === fromUrl
  )

  if (!currentAppPageName) return fromUrl.replace(fromLang, toLang)
  return APP_URL[toLang][currentAppPageName]
}
