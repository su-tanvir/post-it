/* IMPORTANT: for correct operation set the position of the target component to RELATIVE */
import useLockBodyScroll from '@/hooks/useLockBodyScroll'
import useOutsideClick from '@/hooks/useOutsideClick'
import { useRef } from 'react'
import styles from './relativeModal.module.scss'

interface RelativeModalProps {
  isOpen: boolean
  onClose: () => void
  children: JSX.Element | JSX.Element[]
}

export default function RelativeModal({
  isOpen,
  onClose,
  children,
}: RelativeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  useOutsideClick(modalRef, onClose)
  useLockBodyScroll()

  if (!isOpen) return null

  return (
    <div ref={modalRef} role="presentation" className={styles.root}>
      {children}
    </div>
  )
}
