import { ReactComponent as PointIcon } from '@/assets/icons/edit-point.svg'
import { ReactComponent as ImageIcon } from '@/assets/icons/image.svg'
import { ReactComponent as SmileIcon } from '@/assets/icons/smile.svg'
import { ReactComponent as TimeIcon } from '@/assets/icons/time.svg'
import { useTheme } from '@/store/Theme/useTheme'
import { AriaRole, FC, SVGProps } from 'react'
import styles from './textWithIcon.module.scss'

type IconName = 'point' | 'time' | 'image' | 'smile' | 'none'

const ICONS: Record<IconName, FC<SVGProps<SVGSVGElement>> | null> = {
  point: PointIcon,
  time: TimeIcon,
  image: ImageIcon,
  smile: SmileIcon,
  none: null,
}

interface TextWithIconProps {
  role?: Extract<AriaRole, 'button'>
  startIcon?: IconName
  text: string
  endIcon?: IconName
  onClick?: () => void
}

export const TextWithIcon: FC<TextWithIconProps> = ({
  role,
  startIcon,
  text,
  endIcon,
  onClick,
}) => {
  const { mode } = useTheme()
  const StartIcon = ICONS[startIcon || 'none']
  const EndIcon = ICONS[endIcon || 'none']
  const variantClass = role === 'button' ? 'isVariant' : ''

  return (
    <div
      role={role}
      className={`${styles.root} ${styles[variantClass]} ${styles[mode]}`}
      onClick={onClick}
    >
      {StartIcon && <StartIcon className={styles.icon} />}
      <p className={`${styles.text} ${styles[variantClass]}`}>{text}</p>
      {EndIcon && <EndIcon className={styles.icon} />}
    </div>
  )
}

export default TextWithIcon
