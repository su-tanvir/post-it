import { useTheme } from '@/store/Theme/useTheme'
import { FC } from 'react'
import MenuBar from './MenuBar/MenuBar'
import NavBar from './NavBar/NavBar'
import styles from './header.module.scss'

const Header: FC = () => {
  const {
    theme: {
      palette: { mode },
    },
  } = useTheme()

  return (
    <header className={`${styles.root} ${styles[mode]}`}>
      <div className={styles.wrapper}>
        <NavBar />
        <MenuBar />
      </div>
    </header>
  )
}

export default Header
