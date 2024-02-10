import { CUSTOM_FIELDS, SUBJECTS } from '@/constants/post'
import { IconType } from '@/definitions/icons'

export type CustomFieldType = (typeof CUSTOM_FIELDS)[number]

export type CodeType = { language?: string = 'javascript'; code: string }

export type FileType = 'image' | 'text'
export type MediaType = { type: FileType; value: string }

export type CustomFieldTypeValue =
  | {
      type:
        | 'title'
        | 'subtitle'
        | 'text'
        | 'quote'
        | 'bulleted-list'
        | 'numbered-list'
      value: string | null
    }
  | {
      type: 'code'
      value: CodeType | null
    }
  | {
      type: 'media'
      value: MediaType | null
    }

type PostSubject = (typeof SUBJECTS)[number]

export interface Post {
  title: string
  icon: IconType | null
  createdAt: Date
  subjectId: number
  customFields: CustomFieldTypeValue[]
}

export interface PostWithId extends Post {
  id: string
}

export type CreatePostDTO = Omit<Post, 'createdAt'>

export interface GetPostsDTO {
  limit?: number
  page?: number
}
