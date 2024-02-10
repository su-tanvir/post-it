import { MediaType } from '@/definitions/post'
import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import Delete from '@mui/icons-material/DeleteOutline'
import { useState } from 'react'
import Button from '../Button/Button'
import styles from './mediaPreview.module.scss'

interface MediaPreviewProps {
  id: number
  data: MediaType
  readonly?: boolean
}

export default function MediaPreview({
  id,
  data,
  readonly,
}: MediaPreviewProps) {
  const { type, value } = data
  const { updateFields } = useEditionForm()
  const mouseProps = {
    ...(!readonly && {
      onMouseOver: () => setCanDelete(true),
      onMouseLeave: () => setCanDelete(false),
      onClick: () => setCanDelete(!canDelete),
    }),
  }
  const [canDelete, setCanDelete] = useState(!readonly)

  const handleDeleteMediaField = () => {
    updateFields((prevFields) => {
      return prevFields.filter((_, i) => i !== id)
    })
  }

  return (
    <div role="button" className={styles.root} {...mouseProps}>
      {type === 'image' ? (
        <img className={styles.previewImage} src={value} alt="Preview" />
      ) : type === 'text' ? (
        <textarea
          className={styles.previewText}
          defaultValue={value}
          readOnly
        />
      ) : null}

      {canDelete && (
        <Button
          variant="noStyle"
          className={styles.button}
          onClick={handleDeleteMediaField}
        >
          <Delete className={styles.button__icon} />
        </Button>
      )}
    </div>
  )
}
