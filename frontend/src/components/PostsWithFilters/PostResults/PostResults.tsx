import ListOfPosts from '@/components/ListOfPosts/ListOfPosts'
import PostSkeleton from '@/components/ListOfPosts/PostSkeleton'
import { usePosts } from '@/hooks/usePosts'
import { useTheme } from '@/store/Theme/useTheme'
import { FC } from 'react'
import styles from './postResults.module.scss'

export const PostResults: FC = () => {
  const { mode } = useTheme()
  const { loading, posts, allPosts, getNextPosts, loadingNextPosts } =
    usePosts()

  return (
    <div className={`${styles.root} ${styles[mode]}`}>
      {loading ? (
        <PostSkeleton />
      ) : (
        <ListOfPosts
          posts={posts}
          allPostsLoaded={allPosts}
          getNextPosts={getNextPosts}
          loadingNextPosts={loadingNextPosts}
        />
      )}
    </div>
  )
}

export default PostResults
