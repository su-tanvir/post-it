import {
  EMOJI_CATEGORIES,
  EMOJI_SYMBOLS,
  MUI_ICON_CATEGORIES,
  MUI_ICON_NAMES,
} from '@/constants/icons'
import { IconType } from '@/definitions/icons'
import { CustomFieldTypeValue } from '@/definitions/post'

export function getRandomIcon(): IconType {
  const categories = [...EMOJI_CATEGORIES, ...MUI_ICON_CATEGORIES]
  const randomCategoryIdx = Math.floor(Math.random() * categories.length)
  const randromCategory = categories[randomCategoryIdx]

  const randomIconIdxLimit =
    randromCategory === 'all'
      ? MUI_ICON_NAMES[randromCategory].length
      : EMOJI_SYMBOLS[randromCategory].length

  const randomIconIdx = Math.floor(Math.random() * randomIconIdxLimit)

  return {
    category: randromCategory,
    id: randomIconIdx,
  }
}

export function isEmptyCustomField({
  type,
  value,
}: CustomFieldTypeValue): boolean {
  if ((type === 'code' && !value?.code) || !value) return true
  if (type === 'bulleted-list' || type === 'numbered-list') {
    // i.e: "<li>a</li><li><br></li><li><br></li><li></li>" => [ 'a', '<br>', '<br>', '' ]
    const result = value.match(/<li>(.*?)<\/li>/g)?.map(function (val) {
      return val.replace(/<\/?li>/g, '')
    })
    if (!result || !result.some((e) => e && e !== '<br>')) return true
  }
  return false
}
