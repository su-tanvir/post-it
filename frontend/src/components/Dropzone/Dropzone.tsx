import { MediaType } from '@/definitions/post'
import {
  convertFileToString,
  isValidFileSize,
  isValidFileType,
} from '@/helpers/file'
import {
  HighlightOff as CloseIcon,
  CloudUploadOutlined as CloudIcon,
} from '@mui/icons-material'
import { ChangeEvent, DragEvent, FC, Fragment, useRef, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { toast } from 'sonner'
import Button from '../Button/Button'
import styles from './dropzone.module.scss'

interface DropzoneProps extends WithTranslation {
  maxFileSize?: number // in MB
  onClose: () => void
  onDrop: (media: MediaType) => void
}

// Note: we will perform a render cost for drag-on-drop action
const Dropzone: FC<DropzoneProps> = ({
  t,
  maxFileSize = 1,
  onClose,
  onDrop,
}) => {
  const fileChooserRef = useRef<HTMLInputElement>(null)
  const [isInZone, setIsInZone] = useState(false)

  const handleDragFile =
    (isInside: boolean) => (evt: DragEvent<HTMLDivElement>) => {
      // prevent default to allow drop event
      evt.preventDefault()
      setIsInZone(isInside)
    }

  const handleDropFile = (evt: DragEvent<HTMLDivElement>) => {
    // prevent default action: open as link for some elements
    evt.preventDefault()
    const { files } = evt.dataTransfer
    handleFileSave(files)
  }

  const openFileChooser = () => {
    if (fileChooserRef.current) fileChooserRef.current.click()
  }

  const handleSelectedFile = (evt: ChangeEvent<HTMLInputElement>) => {
    const { files } = evt.target
    handleFileSave(files)
  }

  const handleFileSave = (files: FileList | null) => {
    if (!files || !files.length) {
      toast.error(t('error-file-selection'))
      return
    }
    const file = files[0]

    if (!isValidFileType(file)) {
      toast.error(t('error-file-type'))
      return
    }

    if (!isValidFileSize(file, maxFileSize)) {
      toast.error(t('error-file-size', { size: maxFileSize }))
      return
    }

    convertFileToString(file)
      .then((res: MediaType) => {
        onDrop(res)
      })
      .catch(() => toast.error(t('error-file-conversion')))
  }

  return (
    <Fragment>
      <div
        role="button"
        tabIndex={0}
        className={`${styles.root} ${isInZone ? styles.isDragging : ''}`}
        onClick={openFileChooser}
        onDragOver={handleDragFile(true)}
        onDragLeave={handleDragFile(false)}
        onDrop={handleDropFile}
      >
        <input
          ref={fileChooserRef}
          type="file"
          // accept all type
          multiple={false}
          hidden
          onChange={handleSelectedFile}
        />
        <Button
          variant="noStyle"
          className={styles.close}
          onClick={(evt) => {
            evt.stopPropagation()
            onClose()
          }}
        >
          <CloseIcon />
        </Button>
        <div className={styles.wrapper}>
          <CloudIcon className={styles.icon} />
          <header className={styles.header}>{t('dad-info')}</header>
          <Button
            variant="noStyle"
            className={styles.button}
            onClick={(evt) => {
              evt.stopPropagation()
              openFileChooser()
            }}
          >
            {t('upload-file')}
          </Button>
          <footer className={styles.footer}>
            {t('file-max-size', { size: maxFileSize })}
          </footer>
        </div>
      </div>
    </Fragment>
  )
}

export default withTranslation()(Dropzone)
