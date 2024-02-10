/* IMPORTANT: for correct operation set the position of the target component to RELATIVE */
import CustomFields from '@/components/EditionForm/CustomForm/CustomFormFields/CustomFormFields'
import Icon from '@/components/IconPicker/Icon'
import Select from '@/components/Select/Select'
import TextController from '@/components/TextController/TextController'
import TextWithIcon from '@/components/TextWithIcon/TextWithIcon'
import { SUBJECTS } from '@/constants/post'
import { Post } from '@/definitions/post'
import { formatDate } from '@/helpers/date'
import { useTheme } from '@/store/Theme/useTheme'
import { Backdrop, Fade, MenuItem, Modal } from '@mui/material'
import { WithTranslation, withTranslation } from 'react-i18next'
import styles from './postItModal.module.scss'

interface PostItModalProps extends WithTranslation {
  isOpen: boolean
  post: Post
  onClose: () => void
}

function PostItModal({
  t,
  isOpen,
  post: { title, icon, createdAt, subjectId, customFields },
  onClose,
}: PostItModalProps) {
  const { mode } = useTheme()
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      className={`${styles.modal} ${styles[mode]}`}
    >
      <Fade in>
        <div className={`${styles.root} ${styles[mode]}`}>
          <header className={styles.header}>
            {icon && <Icon icon={icon} />}
            <TextController
              role="main-title"
              fullWidth
              readonly
              multiline
              value={title}
            />
          </header>
          <div className={styles.date}>
            <TextWithIcon startIcon="time" text={t('publish-date')} />
            <span className={`${styles.date__format} ${styles[mode]}`}>
              {formatDate(createdAt)}
            </span>
          </div>
          <div className={styles.subject}>
            <TextWithIcon startIcon="point" text={t('subject')} />
            <Select variant="custom" defaultValue={subjectId} readOnly>
              {SUBJECTS.map((subjectKey, idx) => (
                <MenuItem key={subjectKey} value={idx}>
                  {t(subjectKey)}
                </MenuItem>
              ))}
            </Select>
          </div>
          <CustomFields fields={customFields} readonly />
        </div>
      </Fade>
    </Modal>
  )
}

export default withTranslation()(PostItModal)
