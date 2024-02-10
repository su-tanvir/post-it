import { CircularProgress } from '@mui/material'
import { FC } from 'react'
import styles from './loading.module.scss'

interface LoadingProps {
  className?: string
}

export const Loading: FC<LoadingProps> = ({ className }) => {
  return <CircularProgress className={`${styles.root} ${className ?? ''}`} />
}

export default Loading
