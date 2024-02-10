import Button from '@/components/Button/Button'
import { useTheme } from '@/store/Theme/useTheme'
import { darkTheme, lightTheme } from '@/styles/mui/customTheme'
import { DarkMode, LightMode } from '@mui/icons-material'
import { FC } from 'react'
import styles from './themeMode.module.scss'

export const ThemeMode: FC = () => {
  const { mode, setTheme } = useTheme()

  const handleToggle = () => {
    const newTheme = mode === 'light' ? darkTheme : lightTheme
    setTheme(newTheme)
  }

  return (
    <Button
      className={styles.button}
      variant="outlined"
      color="primary"
      size="small"
      startIcon={mode === 'light' ? <DarkMode /> : <LightMode />}
      onClick={handleToggle}
    />
  )
}

export default ThemeMode
