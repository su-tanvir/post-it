import i18n from '@/i18n/i18n'
import { getPosts } from '@/services/post'
import { useGlobalPosts } from '@/store/Posts/useGlobalPosts'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const INITIAL_PAGE = 0

export function usePosts() {
  /* save to store for applied filters */
  const { posts, setPosts, allPosts, setAllPosts } = useGlobalPosts()

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const [loadingNextPosts, setLoadingNextPosts] = useState(false)

  const getNextPosts = () => {
    setPage(page + 1)
  }

  // Effect for first load
  useEffect(() => {
    setLoading(true)
    getPosts()
      .then((posts) => {
        setPosts(posts)
        if (posts.length === 0) setAllPosts(true)
      })
      .catch(() => {
        toast.error(i18n.t('error-get-posts'))
      })
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setPosts])

  // Effect for infinity scroll whether "page" changes
  useEffect(() => {
    if (page === INITIAL_PAGE || allPosts) return

    setLoadingNextPosts(true)
    getPosts({ page })
      .then((nextPosts) => {
        setPosts((prevPosts) => prevPosts.concat(nextPosts))
        if (nextPosts.length === 0) setAllPosts(true)
      })
      .catch(() => {
        toast.error(i18n.t('error-get-posts'))
      })
      .finally(() => setLoadingNextPosts(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, setPosts])

  return { loading, posts, allPosts, getNextPosts, loadingNextPosts }
}
