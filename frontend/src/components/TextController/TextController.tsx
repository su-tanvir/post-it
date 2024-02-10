import { useTheme } from '@/store/Theme/useTheme'
import { InputBaseProps, TextField, TextFieldProps } from '@mui/material'
import { FC } from 'react'
import styles from './textController.module.scss'

type TextRole = 'main-title' | 'title' | 'sub-title' | 'text'

const ROLE_LENGTH: Record<TextRole, number> = {
  'main-title': 100,
  title: 250,
  'sub-title': 500,
  text: Number.MAX_VALUE,
}

type TextControllerProps = Omit<
  TextFieldProps,
  'type' | 'size' | 'color' | 'error'
> & {
  role?: TextRole
  readonly?: boolean
  errorMessage?: string
}

export const TextController: FC<TextControllerProps> = ({
  children,
  value,
  variant = 'standard',
  role = 'text',
  placeholder,
  readonly,
  multiline,
  errorMessage,
  onChange,
  onBlur,
  ...props
}) => {
  const { mode } = useTheme()
  const inputProps: InputBaseProps['inputProps'] = {
    maxLength: ROLE_LENGTH[role],
  }

  return (
    <TextField
      type="text"
      value={value}
      variant={variant}
      classes={{
        root: `${styles.root} ${styles[variant]} ${styles[role]}  ${styles[mode]}`,
      }}
      hiddenLabel
      placeholder={placeholder}
      multiline={multiline}
      inputProps={inputProps}
      autoComplete="off"
      error={Boolean(errorMessage)}
      helperText={errorMessage}
      onChange={onChange}
      onBlur={onBlur}
      InputProps={{
        readOnly: readonly,
      }}
      {...props}
    >
      {children}
    </TextField>
  )
}

export default TextController
