import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return { theme, mode: theme.palette.mode, setTheme }
}
