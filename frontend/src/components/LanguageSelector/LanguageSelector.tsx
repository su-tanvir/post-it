import Select from '@/components/Select/Select'
import { ALL_LANG } from '@/constants/globals'
import { Language } from '@/definitions/common'
import { getTranslatedUrl } from '@/helpers/url'
import { MenuItem, SelectChangeEvent } from '@mui/material'
import { FC, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

type LanguageSelectorProps = WithTranslation

export const LanguageSelector: FC<LanguageSelectorProps> = ({ i18n }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [language, setLanguage] = useState<Language>(i18n.language as Language)

  const handleOnChange = (evt: SelectChangeEvent<unknown>) => {
    const newLang = evt.target.value as Language
    const url = getTranslatedUrl(
      language,
      decodeURIComponent(location.pathname),
      newLang
    )
    setLanguage(newLang)
    document.documentElement.lang = newLang
    navigate(url)
    void i18n.changeLanguage(newLang) // void evaluate a promise
  }

  return (
    <Select
      value={language}
      variant="outlined"
      color="primary"
      onChange={handleOnChange}
    >
      {ALL_LANG.map((lang) => (
        <MenuItem key={lang} value={lang}>
          {lang.toUpperCase()}
        </MenuItem>
      ))}
    </Select>
  )
}

export default withTranslation()(LanguageSelector)
