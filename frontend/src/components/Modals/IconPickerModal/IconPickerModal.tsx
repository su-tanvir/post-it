/* IMPORTANT: for correct operation set the position of the target component to RELATIVE */
import Button from '@/components/Button/Button'
import RelativeModal from '@/components/Modals/RelativeModal/RelativeModal'
import {
  ALL_MUI_ICONS,
  EMOJI_SYMBOLS,
  ICON_GROUP_NAME,
  MUI_ICON_NAMES,
} from '@/constants/icons'
import { IconCategories, IconType, MuiIconNameType } from '@/definitions/icons'
import { getRandomIcon } from '@/helpers/utils'
import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import { DeleteOutline as Delete, Shuffle as Random } from '@mui/icons-material'
import { SvgIcon } from '@mui/material'
import { FC, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import styles from './iconPickerModal.module.scss'

interface IconPickerModalProps extends WithTranslation {
  isOpen: boolean
  onClose: () => void
}

const IconPickerModal: FC<IconPickerModalProps> = ({ t, isOpen, onClose }) => {
  const { setIcon } = useEditionForm()
  const [tab, setTab] = useState<ICON_GROUP_NAME>(ICON_GROUP_NAME.Emojis)

  if (!isOpen) return null

  const data = tab === ICON_GROUP_NAME.Emojis ? EMOJI_SYMBOLS : MUI_ICON_NAMES

  const handleTabClick = (evt: React.MouseEvent<HTMLElement>) => {
    const value = (evt.target as HTMLButtonElement).value as ICON_GROUP_NAME
    if (value !== tab) setTab(value)
  }

  const handleIconSelected = (icon: IconType) => {
    setIcon(icon)
    onClose()
  }

  const handleRandomClick = () => {
    const icon = getRandomIcon()
    setIcon(icon)
  }

  const handleDeleteClick = () => {
    setIcon(null)
    onClose()
  }

  return (
    <RelativeModal isOpen={isOpen} onClose={onClose}>
      <div className={styles.root}>
        <div className={styles.menu}>
          <div className={styles.menu__items}>
            <Button
              variant="noStyle"
              className={`${styles.button} ${
                tab === ICON_GROUP_NAME.Emojis ? styles.isSelected : ''
              }`}
              value={ICON_GROUP_NAME.Emojis}
              onClick={handleTabClick}
            >
              {t('emojis')}
            </Button>
            <Button
              variant="noStyle"
              className={`${styles.button} ${
                tab === ICON_GROUP_NAME.Mui ? styles.isSelected : ''
              }`}
              value={ICON_GROUP_NAME.Mui}
              onClick={handleTabClick}
            >
              {t('icons')}
            </Button>
          </div>
          <div className={styles.menu__actions}>
            <Button
              variant="noStyle"
              className={`${styles.button} ${styles.hasIcon}`}
              startIcon={<Random />}
              onClick={handleRandomClick}
            />
            <Button
              variant="noStyle"
              className={`${styles.button} ${styles.hasIcon}`}
              startIcon={<Delete />}
              onClick={handleDeleteClick}
            />
          </div>
        </div>
        <div className={styles.content}>
          <ul className={styles.category__list}>
            {Object.entries(data).map(([category, icons]) => (
              <li key={category} className={styles.category__item}>
                <p className={styles.category__item_name}>{t(category)}</p>
                <ul className={styles.icon__list}>
                  {icons.map((icon, idx) => (
                    <li
                      key={`${category}-${idx}`}
                      className={styles.icon__item}
                    >
                      <Button
                        variant="noStyle"
                        onClick={() =>
                          handleIconSelected({
                            category: category as IconCategories,
                            id: idx,
                          })
                        }
                      >
                        {category === 'all' ? (
                          <SvgIcon
                            component={ALL_MUI_ICONS[icon as MuiIconNameType]}
                            className={styles.icon}
                          />
                        ) : (
                          <span className={styles.icon}>{icon}</span>
                        )}
                      </Button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </RelativeModal>
  )
}

export default withTranslation()(IconPickerModal)
