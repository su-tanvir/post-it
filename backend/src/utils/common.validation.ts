export const isString = (value: any): boolean => {
  return (typeof value === 'string' || value instanceof String) && value !== ''
}

export const isNumber = (value: any): boolean => {
  return typeof value === 'number'
}

export const isValidNumber = (value: any): boolean => {
  return !isNaN(value)
}

// export const isDate = (date: string): boolean => {
//   return Boolean(Date.parse(date))
// }

export const isNull = (value: any): boolean => {
  return value === null
}

export const isArray = (value: any): boolean => {
  return Array.isArray(value)
}

export const isObject = (value: any): boolean => {
  return typeof value === 'object' && !isArray(value) && !isNull(value)
}
