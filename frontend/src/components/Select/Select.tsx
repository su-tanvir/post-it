import { useTheme } from '@/store/Theme/useTheme'
import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { FC } from 'react'
import styles from './select.module.scss'

// apply different themes because MuiList behavior is like a modal
const defaultTheme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          '.MuiButtonBase-root': {
            color: '#ffb700',
            fontSize: '14px',
          },
        },
      },
    },
  },
})

const customTheme = createTheme({
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
          '.MuiButtonBase-root': {
            color: '#77838f',
            fontSize: '14px',
          },
        },
      },
    },
  },
})

interface SelectProps extends Omit<MuiSelectProps, 'variant'> {
  variant?: 'custom' | 'outlined'
}

const Select: FC<SelectProps> = ({
  children,
  value,
  variant,
  color,
  size,
  className,
  ...props
}) => {
  const { mode } = useTheme()
  return (
    <ThemeProvider theme={variant === 'custom' ? customTheme : defaultTheme}>
      <MuiSelect
        className={`${styles.select} ${variant ? styles[variant] : ''} ${
          styles[mode]
        } ${className ? className : ''}`}
        value={value}
        variant={variant === 'custom' ? undefined : variant}
        color={color}
        size={size}
        {...props}
      >
        {children}
      </MuiSelect>
    </ThemeProvider>
  )
}

export default Select
