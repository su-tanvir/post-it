import { PostsContextProvider } from '@/store/Posts/PostsContext'
import { FC } from 'react'
import PostResults from './PostResults/PostResults'
import styles from './postsWithFilters.module.scss'

export const PostsWithFilters: FC = () => {
  return (
    <div className={styles.root}>
      {/* PostFilters */}
      <PostsContextProvider>
        <PostResults />
      </PostsContextProvider>
    </div>
  )
}

export default PostsWithFilters
