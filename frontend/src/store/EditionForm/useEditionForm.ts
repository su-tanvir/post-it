import { useContext } from 'react'
import { FormFieldsContext, FormFieldsContextProps } from './FormFieldsContext'
import {
  GenericFieldsContext,
  GenericFieldsContextProps,
} from './GenericFieldsContext'
import {
  GenericHeadlineContext,
  GenericHeadlineContextProps,
} from './GenericHeadlineContext'

type useEditionFormType = GenericHeadlineContextProps &
  GenericFieldsContextProps &
  FormFieldsContextProps & { resetForm: () => void }

export const useEditionForm = (): useEditionFormType => {
  const genericHeadline = useContext(GenericHeadlineContext)
  const genericFields = useContext(GenericFieldsContext)
  const customFields = useContext(FormFieldsContext)

  const resetFields = () => {
    const { setTitle, setIcon } = genericHeadline
    const { setSubjectId } = genericFields
    const { updateFields } = customFields
    setTitle('')
    setIcon(null)
    setSubjectId(0)
    updateFields([])
  }

  return {
    ...genericHeadline,
    ...genericFields,
    ...customFields,
    resetForm: resetFields,
  }
}
