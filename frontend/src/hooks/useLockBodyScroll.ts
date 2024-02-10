import { useEffect } from 'react'

export default function useLockBodyScroll() {
  useEffect(() => {
    const { body } = document
    const bodyStyle = window.getComputedStyle(body)
    const originalOverflow = bodyStyle.overflow
    const html = document.documentElement
    const scrollBarWidth = window.innerWidth - html.clientWidth
    const bodyPaddingRight =
      Number(bodyStyle.getPropertyValue('padding-right')) || 0

    body.style.overflow = 'hidden'
    body.style.position = 'relative' // for iOS and desktop Safari
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`

    return () => {
      body.style.overflow = originalOverflow
      body.style.position = ''
      body.style.paddingRight = ''
    }
  }, [])
}
