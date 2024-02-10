import Button from '@/components/Button/Button'
import { ALL_MUI_ICONS, EMOJI_SYMBOLS, MUI_ICON_NAMES } from '@/constants/icons'
import { IconType } from '@/definitions/icons'
import { useTheme } from '@/store/Theme/useTheme'
import { SvgIcon } from '@mui/material'
import styles from './icon.module.scss'

interface IconProps {
  icon: IconType
  onClick?: () => void
}

const Icon = ({ icon, onClick }: IconProps) => {
  const { mode } = useTheme()
  return (
    <Button
      variant="noStyle"
      className={`${styles.button} ${styles[mode]}`}
      onClick={onClick}
    >
      {icon.category === 'all' ? (
        // <div>{createElement(ALL_MUI_ICONS['Abc'])}</div>
        <SvgIcon
          component={ALL_MUI_ICONS[MUI_ICON_NAMES[icon.category][icon.id]]}
          className={`${styles.icon} ${styles.isMui}`}
        />
      ) : (
        <span className={`${styles.icon} ${styles.isEmoji}`}>
          {EMOJI_SYMBOLS[icon.category][icon.id]}
        </span>
      )}
    </Button>
  )
}

export default Icon
