import {
  ALL_MUI_ICONS,
  EMOJI_CATEGORIES,
  MUI_ICON_CATEGORIES,
} from '@/constants/icons'

export type EmojiCategory = (typeof EMOJI_CATEGORIES)[number]
export type MuiIconCategory = (typeof MUI_ICON_CATEGORIES)[number]
export type IconCategories = EmojiCategory | MuiIconCategory

export type MuiIconNameType = keyof typeof ALL_MUI_ICONS

export type IconType = {
  category: IconCategories
  id: number
}
