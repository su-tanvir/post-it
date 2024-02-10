export const ICON_CATEGORIES = ['smileys-emotion', 'people-body', 'animals-nature', 'food-drink', 'travel-places', 'activities', 'objects', 'symbols', 'flags', 'all'] as const

export enum CUSTOM_FIELD_TYPE_NAME {
  title = 'title',
  subtitle = 'subtitle',
  text = 'text',
  quote = 'quote',
  'bulleted-list' = 'bulleted-list',
  'numbered-list' = 'numbered-list',
  code = 'code',
  media = 'media'
}

export enum FILE_TYPE {
  image = 'image',
  text = 'text'
}
