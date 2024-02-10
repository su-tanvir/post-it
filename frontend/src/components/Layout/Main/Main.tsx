import { FC, ReactNode } from 'react'
import styles from './main.module.scss'

interface MainProps {
  children?: ReactNode
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className={styles.root}>{children}</main>
}

export default Main
