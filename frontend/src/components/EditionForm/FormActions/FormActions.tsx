import Button from '@/components/Button/Button'
import PostItModal from '@/components/Modals/PostItModal/PostItModal'
import { CreatePostDTO } from '@/definitions/post'
import { isEmptyCustomField } from '@/helpers/utils'
import { publishPostIt } from '@/services/post'
import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import Publish from '@mui/icons-material/PostAdd'
import Preview from '@mui/icons-material/Visibility'
import { Stack } from '@mui/material'
import { Fragment, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { toast } from 'sonner'

type FormActionsProps = WithTranslation

function FormActions({ t }: FormActionsProps) {
  const { title, icon, subjectId, fields, resetForm } = useEditionForm()
  const [showPreview, setShowPreview] = useState(false)
  // Problem detected: when fields are changed, the context does not notify to refresh the calculations of this component.
  // This shouldn't happen.
  const canPublish = Boolean(title)
  // fields.some((field) => !!field.value)

  const handlePublish = () => {
    const atLeastOneFieldWithValue = fields.some(
      (field) => !isEmptyCustomField(field)
    )
    if (!atLeastOneFieldWithValue) {
      toast.error(t('error-publish-empty-custom-fields'))
    } else {
      // Prepare post (avoid null and empty value)
      const post: CreatePostDTO = {
        title: title,
        icon: icon,
        subjectId: subjectId,
        customFields: fields,
      }
      publishPostIt(post)
        .then(() => {
          toast.success(t('success-publish'))
          resetForm()
        })
        .catch(() => {
          toast.error(t('error-publish'))
        })
    }
  }

  return (
    <Fragment>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Button
          variant="contained"
          size="medium"
          startIcon={<Preview />}
          onClick={() => setShowPreview(true)}
        >
          {t('preview')}
        </Button>
        <Button
          variant="contained"
          size="medium"
          startIcon={<Publish />}
          disabled={!canPublish}
          onClick={handlePublish}
        >
          {t('publish')}
        </Button>
      </Stack>
      {showPreview && (
        <PostItModal
          isOpen
          post={{
            title: title,
            icon: icon,
            createdAt: new Date(),
            subjectId: subjectId,
            customFields: fields,
          }}
          onClose={() => setShowPreview(false)}
        />
      )}
    </Fragment>
  )
}

export default withTranslation()(FormActions)
