import Button from '@/components/Button/Button'
import Layout from '@/components/Layout/Layout'
import { APP_NAME } from '@/constants/globals'
import { APP_URL } from '@/constants/path'
import { Language } from '@/definitions/common'
import useSEO from '@/hooks/useSEO'
import { useTheme } from '@/store/Theme/useTheme'
import { Edit, Summarize } from '@mui/icons-material'
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styles from './homePage.module.scss'

const HomePage: FC<WithTranslation> = ({ t, i18n }) => {
  useSEO({ title: t('home-page'), description: t('home-page-description') })
  const lang = i18n.language as Language
  const { mode } = useTheme()
  const navigate = useNavigate()

  return (
    <Layout>
      <Stack className={styles.wrapper}>
        <Typography className={`${styles.title} ${styles[mode]}`} variant="h2">
          {t('welcome-msg')}
        </Typography>
        <Typography component="div">
          <Typography
            className={`${styles.description} ${styles[mode]}`}
            variant="h5"
          >
            {t('intro-msg')}
          </Typography>
          <Typography
            className={`${styles.description} ${styles.isHighlighted}`}
            variant="h5"
          >
            {APP_NAME.toUpperCase()}
          </Typography>
        </Typography>
        <Stack className={styles.actions}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Edit />}
            onClick={() => navigate(APP_URL[lang].EDITION)}
          >
            {t('create')}
          </Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<Summarize />}
            onClick={() => navigate(APP_URL[lang].POSTS)}
          >
            {t('visualize')}
          </Button>
        </Stack>
      </Stack>
    </Layout>
  )
}

export default withTranslation()(HomePage)
