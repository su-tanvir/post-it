import { MutableRefObject, useEffect } from 'react'

export default function useOutsideClick(
  ref: MutableRefObject<HTMLElement | null>,
  handleOutsideClick?: () => void
) {
  useEffect(() => {
    function handleMouseListener(event: MouseEvent) {
      if (!handleOutsideClick) return
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handleOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleMouseListener)
    return () => {
      document.removeEventListener('mousedown', handleMouseListener)
    }
  }, [ref, handleOutsideClick])
}
