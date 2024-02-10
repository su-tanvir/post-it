import { ReactComponent as AddIcon } from '@/assets/icons/add.svg'
import Select from '@/components/Select/Select'
import TextWithIcon from '@/components/TextWithIcon/TextWithIcon'
import { CUSTOM_FIELDS, SUBJECTS } from '@/constants/post'
import { CustomFieldType } from '@/definitions/post'
import { formatDate } from '@/helpers/date'
import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import { useTheme } from '@/store/Theme/useTheme'
import { MenuItem } from '@mui/material'
import { useMemo } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import styles from './genericFormFields.module.scss'

type GenericFormFields = WithTranslation

function GenericFormFields({ t }: GenericFormFields) {
  const { mode } = useTheme()
  const { subjectId, setSubjectId, updateFields } = useEditionForm()
  const today = useMemo(() => formatDate(new Date()), []) // calculate once and cached

  const createCustomField = (evt: React.MouseEvent<HTMLLIElement>) => {
    const type = (evt.target as HTMLLIElement).dataset[
      'value'
    ] as CustomFieldType
    updateFields((prevFields) => prevFields.concat({ type, value: null }))
  }

  return (
    <ul className={styles.fields}>
      <li className={styles.field}>
        <TextWithIcon startIcon="time" text={t('creation-date')} />
        <span className={`${styles.title} ${styles[mode]}`}>{today}</span>
      </li>
      <li className={styles.field}>
        <TextWithIcon startIcon="point" text={t('subject')} />
        <Select
          variant="custom"
          value={subjectId}
          onChange={(evt) => {
            setSubjectId(Number(evt.target.value))
          }}
        >
          {SUBJECTS.map((subjectKey, idx) => (
            <MenuItem
              key={subjectKey}
              value={idx}
              className={styles.select__menu}
            >
              {t(subjectKey)}
            </MenuItem>
          ))}
        </Select>
      </li>
      <li>
        <Select
          className={`${styles.select} ${styles[mode]}`}
          variant="custom"
          IconComponent={AddIcon}
          defaultValue={0}
          // onChange + onClick: not suitable
        >
          <MenuItem className={styles.select__menu} disabled value={0}>
            {t('add-section')}
          </MenuItem>
          {CUSTOM_FIELDS.map((fieldKey) => (
            <MenuItem
              key={fieldKey}
              value={fieldKey}
              onClick={createCustomField}
              className={styles.select__menu}
            >
              {t(fieldKey)}
            </MenuItem>
          ))}
        </Select>
      </li>
    </ul>
  )
}

export default withTranslation()(GenericFormFields)
