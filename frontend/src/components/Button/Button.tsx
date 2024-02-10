import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material'
import { FC } from 'react'
import styles from './button.module.scss'

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'noStyle' | 'outlined' | 'contained'
}

const Button: FC<ButtonProps> = ({
  children,
  variant,
  color,
  size,
  startIcon,
  className,
  ...props
}) => (
  <MuiButton
    className={`${styles.button} ${variant ? styles[variant] : ''} ${
      className ? className : ''
    }`}
    variant={variant === 'noStyle' ? undefined : variant}
    color={color}
    size={size}
    startIcon={startIcon}
    {...props}
  >
    {children}
  </MuiButton>
)

export default Button
