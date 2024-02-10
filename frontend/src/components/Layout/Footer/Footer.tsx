import Button from '@/components/Button/Button'
import { GITHUB_URL, LINKEDIN_URL } from '@/constants/author'
import { useTheme } from '@/store/Theme/useTheme'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { Link, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import styles from './footer.module.scss'

type FooterProps = WithTranslation

const Footer: FC<FooterProps> = ({ t }) => {
  const {
    theme: {
      palette: { mode },
    },
  } = useTheme()

  return (
    <footer className={styles.root}>
      <div className={`${styles.wrapper} ${styles[mode]}`}>
        <Typography color="primary" variant="body2">
          {`${t('made-by')} ${t('author-name')}`}
        </Typography>
        <Stack direction="row" justifyContent="center" spacing={1}>
          <Link href={GITHUB_URL} target="_blank">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<GitHub />}
            />
          </Link>
          <Link href={LINKEDIN_URL} target="_blank">
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<LinkedIn />}
            />
          </Link>
        </Stack>
      </div>
    </footer>
  )
}

export default withTranslation()(Footer)
