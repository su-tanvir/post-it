import { ReactComponent as Logo } from '@/assets/icons/logo.svg'
import { APP_NAME } from '@/constants/globals'
import { Typography } from '@mui/material'
import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './navBar.module.scss'

type NavBarProps = WithTranslation

const NavBar: FC<NavBarProps> = ({ i18n }) => {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to={`/${i18n.language}`}>
            <Logo className={styles.logo} />
            <Typography
              className={styles.typography}
              variant="h6"
              color="primary"
            >
              {APP_NAME}
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default withTranslation()(NavBar)
