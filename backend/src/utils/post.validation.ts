import { IconType, CustomFieldTypeValue, CreatePostDTO, GetPostsDTO, UpdatePostDTO } from '../types/post'
import { isString, isNull, isObject, isNumber, isArray, isValidNumber } from './common.validation'
import { ICON_CATEGORIES, CUSTOM_FIELD_TYPE_NAME, FILE_TYPE } from './constants'

const parseTitle = (titleFromRequest: any): string => {
  if (!isString(titleFromRequest)) throw new Error('Incorrect title')
  return titleFromRequest
}

// const parseDate = (dateFromRequest: any): Date => {
//   if (!isString(dateFromRequest) || !isDate(dateFromRequest)) throw new Error('Incorrect date')
//   return dateFromRequest
// }

const isIconCategory = (category: any): boolean => {
  return isString(category) && ICON_CATEGORIES.includes(category)
}

const isIcon = (icon: any): boolean => {
  if (!isObject(icon)) return false
  const isCategory = 'category' in icon && isIconCategory(icon.category)
  const isId = 'id' in icon && isNumber(icon.id)
  return isCategory && isId
}

const parseIcon = (iconFromRequest: any): IconType | null => {
  if (!isNull(iconFromRequest) && !isIcon(iconFromRequest)) throw new Error('Incorrect icon')
  return iconFromRequest
}

const parseSubject = (subject: any): number => {
  if (!isNumber(subject)) throw new Error('Incorrect subject')
  return subject
}

const isCustomFieldType = (type: any): boolean => {
  return isString(type) && Object.values(CUSTOM_FIELD_TYPE_NAME).includes(type)
}

const isCustomFieldValue = (type: string, value: any): boolean => {
  if (type === CUSTOM_FIELD_TYPE_NAME.code) {
    return isObject(value) && ('language' in value && isString(value.language)) && ('code' in value && isString(value.code))
  } else if (type === CUSTOM_FIELD_TYPE_NAME.media) {
    return isObject(value) && ('type' in value && Object.values(FILE_TYPE).includes(value.type)) && ('value' in value && isString(value.value))
  }
  return isString(value)
}

const areCustomFields = (customFields: any[]): boolean => {
  if (customFields.length === 0) return false

  for (const customField of customFields) {
    if (!isObject(customField)) return false
    const isType = 'type' in customField && isCustomFieldType(customField.type)
    if (!isType) return false
    const isValue = 'value' in customField && isCustomFieldValue(customField.type, customField.value)
    if (!isValue) return false
  }

  return true
}

const parseCustomFields = (fields: any): CustomFieldTypeValue[] => {
  if (!isArray(fields) || !areCustomFields(fields)) throw new Error('Incorrect custom fields')
  return fields
}

export const toNewPost = (reqObj: any): CreatePostDTO => {
  const newPost: CreatePostDTO = {
    title: parseTitle(reqObj.title),
    icon: parseIcon(reqObj.icon),
    subjectId: parseSubject(reqObj.subjectId),
    customFields: parseCustomFields(reqObj.customFields)
  }
  return newPost
}

export const toUpdatePostValues = (reqObj: any): UpdatePostDTO => {
  const updatePost: UpdatePostDTO = {
    title: parseTitle(reqObj.title)
  }
  return updatePost
}

export const parseGetPostsRequestQuery = (reqObj: any): GetPostsDTO => {
  const limit = reqObj.limit
  const offset = reqObj.offset
  if (!isValidNumber(limit) || !isValidNumber(offset)) return {}
  return { limit, offset }
}
