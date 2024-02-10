import { CustomFieldTypeValue } from '@/definitions/post'
import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import { useTheme } from '@/store/Theme/useTheme'
import { FC, useCallback } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import styles from './textEditor.module.scss'

interface TextEditorProps extends WithTranslation {
  id: number
  type: Exclude<CustomFieldTypeValue['type'], 'code' | 'image'>
  value: string | null
  readonly?: boolean
}

const TextEditor: FC<TextEditorProps> = ({ t, id, type, value, readonly }) => {
  const { mode } = useTheme()
  const { updateFields } = useEditionForm()

  const handleSaveField = useCallback((evt: React.FocusEvent) => {
    // Note: text or html-tag is not sanitized
    updateFields((prevFields) => {
      prevFields[id].value = evt.currentTarget.innerHTML
      return prevFields
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDeleteField = useCallback((evt: React.KeyboardEvent) => {
    if (
      evt.key === 'Backspace' &&
      !evt.currentTarget.children.length &&
      !evt.currentTarget.textContent
    ) {
      updateFields((prevFields) => {
        return prevFields.filter((_, i) => i !== id)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return type === 'title' ? (
    <h4
      contentEditable={!readonly}
      className={`${styles.title} ${styles[mode]}`}
      placeholder={t('title') || ''}
      onBlur={handleSaveField}
      onKeyDown={handleDeleteField}
      dangerouslySetInnerHTML={{ __html: value || '' }}
    />
  ) : type === 'subtitle' ? (
    <h6
      contentEditable={!readonly}
      className={`${styles.subtitle} ${styles[mode]}`}
      placeholder={t('subtitle') || ''}
      onBlur={handleSaveField}
      onKeyDown={handleDeleteField}
      dangerouslySetInnerHTML={{ __html: value || '' }}
    />
  ) : type === 'text' ? (
    <p
      contentEditable={!readonly}
      className={`${styles.text} ${styles[mode]}`}
      placeholder={t('text') || ''}
      onBlur={handleSaveField}
      onKeyDown={handleDeleteField}
      dangerouslySetInnerHTML={{ __html: value || '' }}
    />
  ) : type === 'bulleted-list' ? (
    <ul
      suppressContentEditableWarning
      contentEditable={!readonly}
      className={`${styles.unorderedList} ${styles[mode]}`}
      onBlur={handleSaveField}
      onKeyUp={handleDeleteField}
      dangerouslySetInnerHTML={{ __html: value || '<li />' }}
    />
  ) : type === 'numbered-list' ? (
    <ol
      suppressContentEditableWarning
      contentEditable={!readonly}
      className={`${styles.orderedList} ${styles[mode]}`}
      onBlur={handleSaveField}
      onKeyUp={handleDeleteField}
      dangerouslySetInnerHTML={{ __html: value || '<li />' }}
    />
  ) : type === 'quote' ? (
    <div className={`${styles.quote} ${styles[mode]}`}>
      <p
        contentEditable={!readonly}
        className={styles.quote__text}
        placeholder={t('quote') || ''}
        onBlur={handleSaveField}
        onKeyDown={handleDeleteField}
        dangerouslySetInnerHTML={{ __html: value || '' }}
      />
    </div>
  ) : null
}

export default withTranslation()(TextEditor)
