import LanguageSelector from '@/components/LanguageSelector/LanguageSelector'
import Searcher from '@/components/Searcher/Searcher'
import ThemeMode from '@/components/ThemeMode/ThemeMode'
import { Stack } from '@mui/material'
import { FC } from 'react'

const MenuBar: FC = () => {
  return (
    <Stack style={{ height: '30px' }} direction="row" spacing={1}>
      <Searcher />
      <LanguageSelector />
      <ThemeMode />
    </Stack>
  )
}

export default MenuBar
