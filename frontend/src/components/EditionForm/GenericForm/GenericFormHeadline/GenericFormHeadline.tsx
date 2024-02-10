import IconPicker from '@/components/IconPicker/IconPicker'
import TextController from '@/components/TextController/TextController'
import TextWithIcon from '@/components/TextWithIcon/TextWithIcon'
import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import { FocusEvent, useEffect, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { toast } from 'sonner'
import styles from './genericFormHeadline.module.scss'

type GenericFormHeadlineProps = WithTranslation

function GenericFormHeadline({ t }: GenericFormHeadlineProps) {
  const { icon, title, setTitle } = useEditionForm()
  const [showOptions, setShowOptions] = useState(false)
  const [showIcon, setShowIcon] = useState(icon !== null)

  useEffect(() => {
    setShowIcon(icon !== null)
  }, [icon])

  const handleMouseEnter = () => {
    if (!showOptions) setShowOptions(true)
  }

  const handleMouseLeave = () => {
    if (showOptions) setShowOptions(false)
  }

  const handleTitle = (evt: FocusEvent<HTMLInputElement>) => {
    setTitle(evt.target.value)
  }

  return (
    <header
      className={styles.headline}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.headline__options}>
        {showOptions && (
          <ul className={styles.headline__options_visibility}>
            {!showIcon && (
              <li>
                <TextWithIcon
                  role="button"
                  startIcon="smile"
                  text={t('add-icon')}
                  onClick={() => setShowIcon((prev) => !prev)}
                />
              </li>
            )}
            <li>
              <TextWithIcon
                role="button"
                startIcon="image"
                text={t('add-cover')}
                onClick={() =>
                  toast.message(t('feature-not-available'), {
                    description: t('coming-soon-msg') || '',
                  })
                }
              />
            </li>
          </ul>
        )}
      </div>
      <div className={styles.headline__title}>
        {showIcon && <IconPicker />}
        <TextController
          role="main-title"
          fullWidth
          multiline
          value={title}
          placeholder={t('placeholder-title') || ''}
          onChange={handleTitle}
        />
      </div>
    </header>
  )
}

export default withTranslation()(GenericFormHeadline)
