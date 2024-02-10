import { ICON_CATEGORIES } from '../utils/constants'

export type PostID = string

export type IconCategories = (typeof ICON_CATEGORIES)[number]

export interface IconType {
  category: IconCategories
  id: number
}

export interface CodeType { language: string, code: string }

export type FileType = 'image' | 'text'
export interface MediaType { type: FileType, value: string }

export type CustomFieldTypeValue =
  | {
    type:
    | 'title'
    | 'subtitle'
    | 'text'
    | 'quote'
    | 'bulleted-list'
    | 'numbered-list'
    value: string
  }
  | {
    type: 'code'
    value: CodeType
  }
  | {
    type: 'media'
    value: MediaType
  }

export interface Post {
  title: string
  icon: IconType | null
  subjectId: number
  customFields: CustomFieldTypeValue[]
  createdAt: Date
  updatedAt?: Date
}

export type PostWithId = Post & { id: PostID }

export interface GetPostsDTO {
  limit?: number
  offset?: number
}

export type CreatePostDTO = Omit<Post, 'createdAt' | 'updatedAt'>

export type UpdatePostDTO = Pick<Post, 'title'>
