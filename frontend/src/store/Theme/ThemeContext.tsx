import { lightTheme } from '@/styles/mui/customTheme'
import { Theme } from '@mui/material/styles'
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export type ThemeContextProps = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext({} as ThemeContextProps)

interface ThemeContextProviderProps {
  children: ReactNode
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
