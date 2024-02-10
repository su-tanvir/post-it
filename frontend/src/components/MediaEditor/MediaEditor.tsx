import { MediaType } from '@/definitions/post'
import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import { FC, useState } from 'react'
import Dropzone from '../Dropzone/Dropzone'
import MediaPreview from '../MediaPreview/MediaPreview'
import styles from './mediaEditor.module.scss'

interface MediaEditorProps {
  id: number
  data: MediaType | null
  readonly?: boolean
}

const MediaEditor: FC<MediaEditorProps> = ({ id, data, readonly }) => {
  const { updateFields } = useEditionForm()
  const [media, setMedia] = useState(data)

  const handleDroppedMedia = (media: MediaType) => {
    updateFields((prevFields) => {
      prevFields[id].value = media
      return prevFields
    })
    setMedia(media)
  }

  const handleDeleteMediaField = () => {
    updateFields((prevFields) => {
      return prevFields.filter((_, i) => i !== id)
    })
  }

  return (
    <div className={styles.root}>
      {media ? (
        <MediaPreview id={id} data={media} readonly={readonly} />
      ) : (
        <Dropzone
          onClose={handleDeleteMediaField}
          onDrop={(media: MediaType) => handleDroppedMedia(media)}
        />
      )}
    </div>
  )
}

export default MediaEditor
