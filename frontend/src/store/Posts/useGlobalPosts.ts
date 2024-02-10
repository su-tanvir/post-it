import { useContext } from 'react'
import { PostsContext } from './PostsContext'

export const useGlobalPosts = () => {
  const postContext = useContext(PostsContext)
  return { ...postContext }
}
