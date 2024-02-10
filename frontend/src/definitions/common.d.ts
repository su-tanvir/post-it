import { ALL_LANG } from '@/constants/globals'

export type Language = (typeof ALL_LANG)[number]

export type PageType = 'HOME' | 'EDITION' | 'POSTS'

export type Pages = {
  [key in PageType]: string
}

export type DateFormatType = 'custom' | 'european'

export type AlignmentType = 'left' | 'center' | 'right'

export type SizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
