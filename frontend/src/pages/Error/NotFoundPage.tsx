import { ReactComponent as NotFound } from '@/assets/unkown-planet.svg'
import Button from '@/components/Button/Button'
import Layout from '@/components/Layout/Layout'
import ShootingStars from '@/components/ShootingStars/ShootingStars'
import { APP_URL } from '@/constants/path'
import { Language } from '@/definitions/common'
import useSEO from '@/hooks/useSEO'
import i18n from '@/i18n/i18n'
import { useTheme } from '@/store/Theme/useTheme'
import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import styles from './notFoundPage.module.scss'

const NotFoundPage: FC<WithTranslation> = ({ t }) => {
  useSEO({
    title: t('not-found-page'),
    description: t('not-found-page-description'),
  })
  const { mode } = useTheme()
  const navigate = useNavigate()

  const handleClick = () => {
    const lang = i18n.language as Language
    navigate(APP_URL[lang].HOME)
  }

  return (
    <Layout>
      <div className={styles.root}>
        <ShootingStars />
        <div className={`${styles.content} ${styles[mode]}`}>
          <NotFound className={styles.img} />
          <h2 className={styles.title}>{t('not-found-title')}</h2>
          <p className={styles.description}>{t('not-found-description')}</p>
          <Button
            className={styles.button}
            color="primary"
            variant="contained"
            size="large"
            onClick={handleClick}
          >
            {t('back-to-home')}
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default withTranslation()(NotFoundPage)
