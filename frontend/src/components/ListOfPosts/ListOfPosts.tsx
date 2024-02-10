import { PostWithId } from '@/definitions/post'
import { useTheme } from '@/store/Theme/useTheme'
import NotFoundIcon from '@mui/icons-material/Block'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ListIcon from '@mui/icons-material/List'
import { FC } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import Button from '../Button/Button'
import Loading from '../Loading/Loading'
import styles from './listOfPosts.module.scss'
import Post from './Post'
interface ListOfPostsProps extends WithTranslation {
  posts: PostWithId[]
  allPostsLoaded: boolean
  getNextPosts(): void
  loadingNextPosts: boolean
}

const ListOfPosts: FC<ListOfPostsProps> = ({
  t,
  posts,
  allPostsLoaded,
  getNextPosts,
  loadingNextPosts,
}) => {
  const { mode } = useTheme()
  const hasPosts = posts.length > 0

  return (
    <section className={`${styles.root} ${styles[mode]}`}>
      <header className={styles.header}>
        <ListIcon className={`${styles.icon} ${styles[mode]}`} />
        <h4 className={`${styles.description} ${styles[mode]}`}>
          {t('result', { count: posts.length })}
        </h4>
      </header>

      <hr className={`${styles.line} ${styles[mode]}`} />

      {hasPosts ? (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.id} className={styles.item}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <footer className={styles.footer}>
          <NotFoundIcon className={`${styles.footer__icon} ${styles[mode]}`} />
          <div className={styles.footer__info}>
            <p className={`${styles.footer__title} ${styles[mode]}`}>
              {t('posts-not-found')}
            </p>
            <p className={`${styles.footer__description} ${styles[mode]}`}>
              {t('posts-not-found-detail')}
            </p>
          </div>
        </footer>
      )}

      {loadingNextPosts ? (
        <Loading className={styles.loading} />
      ) : hasPosts && !allPostsLoaded ? (
        <div className={styles.action}>
          <Button
            className={styles.button}
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<ExpandMoreIcon />}
            onClick={getNextPosts}
          >
            <span className={styles.button__text}>{t('more')}</span>
          </Button>
        </div>
      ) : null}
    </section>
  )
}

export default withTranslation()(ListOfPosts)
