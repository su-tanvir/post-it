import { CodeType } from '@/definitions/post'
import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import { MenuItem } from '@mui/material'
import { FC, useCallback, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import * as LANGUAGES from 'react-syntax-highlighter/dist/esm/languages/hljs'
import codeTheme from 'react-syntax-highlighter/dist/esm/styles/hljs/vs'
import Select from '../Select/Select'
import styles from './codeEditor.module.scss'

interface CodeEditorProps {
  id: number
  data: CodeType | null
  readonly?: boolean
}

const CodeEditor: FC<CodeEditorProps> = ({ id, data, readonly }) => {
  const { updateFields } = useEditionForm()
  const [language, setLanguage] = useState(data?.language || 'javascript')
  const [code, setCode] = useState(data?.code || '')

  // Se evita el uso de useCallback porque es necesario leer los últimos valores de language + code
  // Se podría usar useCallback con deps
  const handleSaveField = () => {
    updateFields((prevFields) => {
      prevFields[id].value = {
        language: language,
        code: code,
      } as CodeType
      return prevFields
    })
  }

  const handleDeleteField = useCallback((evt: React.KeyboardEvent) => {
    if (evt.key === 'Backspace' && !evt.currentTarget.textContent) {
      updateFields((prevFields) => {
        return prevFields.filter((_, i) => i !== id)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styles.root}>
      <Select
        className={styles.select}
        variant="custom"
        value={language}
        readOnly={readonly}
        onChange={(evt) => {
          setLanguage(evt.target.value as string)
        }}
        onBlur={handleSaveField}
      >
        {Object.keys(LANGUAGES)
          .sort()
          .map((theme) => (
            <MenuItem key={theme} value={theme} className={styles.select__menu}>
              {theme}
            </MenuItem>
          ))}
      </Select>
      <div className={styles.code}>
        <textarea
          className={styles.editor}
          placeholder='console.log("Hello world!")'
          spellCheck="false"
          value={code}
          readOnly={readonly}
          onChange={(e) => setCode(e.target.value)}
          onBlur={handleSaveField}
          onKeyDown={handleDeleteField}
        />
        <SyntaxHighlighter
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          style={codeTheme}
          className={styles.highlighter}
          language={language}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeEditor
