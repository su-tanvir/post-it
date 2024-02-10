import CodeEditor from '@/components/CodeEditor/CodeEditor'
import MediaEditor from '@/components/MediaEditor/MediaEditor'
import TextEditor from '@/components/TextEditor/TextEditor'
import { CodeType, CustomFieldTypeValue, MediaType } from '@/definitions/post'
import { isEmptyCustomField } from '@/helpers/utils'
import { useCallback } from 'react'
import styles from './customFormFields.module.scss'

interface CustomFormFieldsProps {
  fields: CustomFieldTypeValue[]
  readonly?: boolean
}

export default function CustomFormFields({
  fields,
  readonly,
}: CustomFormFieldsProps) {
  // avoid creating fn on every render
  const renderCustomField = useCallback(
    (id: number, field: CustomFieldTypeValue) => {
      const { type, value } = field

      if (readonly && isEmptyCustomField(field)) return null

      switch (type) {
        case 'code':
          return (
            <CodeEditor id={id} data={value as CodeType} readonly={readonly} />
          )
        case 'media':
          return (
            <MediaEditor
              id={id}
              data={value as MediaType}
              readonly={readonly}
            />
          )
        default:
          return (
            <TextEditor id={id} type={type} value={value} readonly={readonly} />
          )
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <ul className={styles.custom__fields}>
      {fields.map((field, index) => (
        <li
          key={crypto.randomUUID()}
          className={styles[`custom__field_${field.type}`]}
        >
          {renderCustomField(index, field)}
        </li>
      ))}
    </ul>
  )
}
