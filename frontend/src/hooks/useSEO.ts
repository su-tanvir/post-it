import { APP_NAME } from '@/constants/globals'
import { useEffect, useRef } from 'react'

interface SEOProps {
  title: string
  description: string
}

/**
 * Pre: tag "title" and "description" already exist
 */
export default function useSEO({ title, description }: SEOProps) {
  const prevTitle = useRef(document.title)
  const prevDescription = useRef(
    document.querySelector('meta[name="description"]')?.getAttribute('content')
  )

  useEffect(() => {
    const prevTitleRef = prevTitle.current
    document.title = `${title} | ${APP_NAME}`

    const metaDescription = document.querySelector('meta[name="description"]')
    const prevDescriptionRef = prevDescription.current
    if (metaDescription) metaDescription.setAttribute('content', description)

    return () => {
      document.title = prevTitleRef
      if (prevDescriptionRef && metaDescription)
        metaDescription.setAttribute('content', prevDescriptionRef)
    }
  }, [title, description])
}
