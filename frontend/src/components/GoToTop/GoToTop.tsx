import { useTheme } from '@/store/Theme/useTheme'
import ArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { FC, Fragment, useEffect, useState } from 'react'
import Button from '../Button/Button'
import styles from './goToTop.module.scss'

const GoToTop: FC = () => {
  const { mode } = useTheme()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)
    return () => {
      window.removeEventListener('scroll', handleOnScroll)
    }
  }, [])

  const handleOnScroll = () => {
    const scrollY = window.scrollY
    setIsVisible(scrollY > 200)
  }

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Fragment>
      {isVisible && (
        <Button
          className={`${styles.button} ${styles[mode]}`}
          variant="outlined"
          color="primary"
          size="small"
          startIcon={<ArrowUpIcon />}
          onClick={handleOnClick}
        />
      )}
    </Fragment>
  )
}

export default GoToTop
