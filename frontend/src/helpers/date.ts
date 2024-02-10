import { DateFormatType } from '@/definitions/common'
import i18n from '@/i18n/i18n'

const formatDate = (
  date: Date,
  format: DateFormatType = 'custom',
  delimiter = '/'
) => {
  date = new Date(date)
  const day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear()

  if (format === 'european') {
    return `${day}${delimiter}${month}${delimiter}${year}`
  } else if (format === 'custom') {
    const monthName = `${date.toLocaleString('en-us', {
      month: 'long',
    })} ${day}`
    const time = date.toLocaleString('en-us', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    return `${monthName}, ${year} ${time}`
  }

  return date.toLocaleDateString('es-ES')
}

/**
 * Pre: date must be before or equal to today's datetime
 */
const getElapsedTimeFromDate = (initialDate: Date) => {
  const today = new Date()
  initialDate = new Date(initialDate)
  const elapsedTime = today.getTime() - initialDate.getTime() // in ms

  const seconds = Math.floor(elapsedTime / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return i18n.t('day-ago', { count: days })
  else if (hours > 0) return i18n.t('hour-ago', { count: hours })
  else if (minutes > 0) return i18n.t('minute-ago', { count: minutes })
  return i18n.t('second-ago', { count: seconds })
}

export { formatDate, getElapsedTimeFromDate }
