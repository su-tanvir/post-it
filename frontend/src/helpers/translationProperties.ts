import { WithTranslation } from 'react-i18next'

const translationProperties: WithTranslation = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  i18n: { language: 'en', changeLanguage: (lng: string) => lng } as any,
  tReady: true,
  t: <K extends string>(text: K) => text,
}

export default translationProperties
