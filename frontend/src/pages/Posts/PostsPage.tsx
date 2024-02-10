import GoToTop from '@/components/GoToTop/GoToTop'
import Layout from '@/components/Layout/Layout'
import PostsWithFilters from '@/components/PostsWithFilters/PostsWithFilters'
import useSEO from '@/hooks/useSEO'
import { useTheme } from '@/store/Theme/useTheme'
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import styles from './postsPage.module.scss'

export const PostsPage: FC<WithTranslation> = ({ t }) => {
  useSEO({ title: t('posts-page'), description: t('posts-page-description') })
  const { mode } = useTheme()

  return (
    <Layout>
      <Stack alignItems="center">
        <Typography className={`${styles.title} ${styles[mode]}`} variant="h4">
          {t('title-posts')}
        </Typography>
        <PostsWithFilters />
        <GoToTop />
      </Stack>
    </Layout>
  )
}

export default withTranslation()(PostsPage)
