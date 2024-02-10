import { Skeleton } from '@mui/material'
import { FC } from 'react'
import styles from './postSkeleton.module.scss'

const PostSkeleton: FC = () => {
  const posts = [...Array(10).keys()]
  return (
    <ul className={styles.root}>
      {posts.map((id) => (
        <li key={id} className={styles.skeleton}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton />
        </li>
      ))}
    </ul>
  )
}

export default PostSkeleton
