import { SUBJECTS } from '@/constants/post'
import { PostWithId } from '@/definitions/post'
import { getElapsedTimeFromDate } from '@/helpers/date'
import { useTheme } from '@/store/Theme/useTheme'
import { FC, Fragment, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import Icon from '../IconPicker/Icon'
import PostItModal from '../Modals/PostItModal/PostItModal'
import TextController from '../TextController/TextController'
import styles from './post.module.scss'

interface PostProps extends WithTranslation {
  post: PostWithId
}

const Post: FC<PostProps> = ({ t, post }) => {
  const { mode } = useTheme()
  const { icon, title, subjectId, createdAt } = post
  const [showPostDetail, setShowPostDetail] = useState(false)

  return (
    <Fragment>
      <article
        role="button"
        className={`${styles.root} ${styles[mode]}`}
        onClick={() => {
          setShowPostDetail(true)
        }}
      >
        <header className={styles.header}>
          {icon && <Icon icon={icon} />}
          <TextController
            className={styles.title}
            fullWidth
            readonly
            multiline
            value={title}
          />
        </header>
        <p className={`${styles.subject} ${styles[mode]}`}>
          {t(SUBJECTS[subjectId])}
        </p>
        <footer className={`${styles.date} ${styles[mode]}`}>
          {`${t('published')} ${getElapsedTimeFromDate(createdAt)}`}
        </footer>
      </article>
      {showPostDetail && (
        <PostItModal
          isOpen
          post={post}
          onClose={() => setShowPostDetail(false)}
        />
      )}
    </Fragment>
  )
}

export default withTranslation()(Post)
