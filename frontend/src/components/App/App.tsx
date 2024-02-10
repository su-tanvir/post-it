import { APP_URL } from '@/constants/path'
import { Language } from '@/definitions/common'
import EditionPage from '@/pages/Edition/EditionPage'
import NotFoundPage from '@/pages/Error/NotFoundPage'
import HomePage from '@/pages/Home/HomePage'
import PostsPage from '@/pages/Posts/PostsPage'
import { useTheme } from '@/store/Theme/useTheme'
import { ThemeProvider } from '@mui/material/styles'
import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import styles from './app.module.scss'

type AppProps = WithTranslation

const App: FC<AppProps> = ({ i18n }) => {
  const lang = i18n.language as Language
  const { theme } = useTheme()

  return (
    <div className={`${styles.root} ${styles[theme.palette.mode]}`}>
      <ThemeProvider theme={theme}>
        <Toaster
          position="bottom-right"
          duration={4000}
          expand
          richColors
          closeButton
        />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Navigate replace to={APP_URL[lang].HOME} />}
            />
            <Route path={APP_URL[lang].HOME} element={<HomePage />} />
            <Route path={APP_URL[lang].EDITION} element={<EditionPage />} />
            <Route path={APP_URL[lang].POSTS} element={<PostsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default withTranslation()(App)
