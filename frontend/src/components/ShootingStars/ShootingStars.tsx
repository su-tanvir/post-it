import { FC } from 'react'
import styles from './shootingStars.module.scss'

const ShootingStars: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <span className={styles.shooter} />
        <span className={styles.shooter} />
        <span className={styles.shooter} />
        <span className={styles.shooter} />
        <span className={styles.shooter} />
      </div>
    </div>
  )
}

export default ShootingStars
