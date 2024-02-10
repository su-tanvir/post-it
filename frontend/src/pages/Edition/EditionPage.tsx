import EditionForm from '@/components/EditionForm/EditionForm'
import FormActions from '@/components/EditionForm/FormActions/FormActions'
import Layout from '@/components/Layout/Layout'
import useSEO from '@/hooks/useSEO'
import { FormFieldsContextProvider } from '@/store/EditionForm/FormFieldsContext'
import { GenericFieldsContextProvider } from '@/store/EditionForm/GenericFieldsContext'
import { GenericHeadlineContextProvider } from '@/store/EditionForm/GenericHeadlineContext'
import { useTheme } from '@/store/Theme/useTheme'
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import styles from './editionPage.module.scss'

export const EditionPage: FC<WithTranslation> = ({ t }) => {
  useSEO({
    title: t('edition-page'),
    description: t('edition-page-description'),
  })
  const { mode } = useTheme()

  return (
    <Layout>
      <GenericHeadlineContextProvider>
        <GenericFieldsContextProvider>
          <FormFieldsContextProvider>
            <Stack alignItems="center" spacing={2}>
              <Typography
                className={`${styles.title} ${styles[mode]}`}
                variant="h4"
              >
                {t('title-edition')}
              </Typography>
              <EditionForm />
              <FormActions />
            </Stack>
          </FormFieldsContextProvider>
        </GenericFieldsContextProvider>
      </GenericHeadlineContextProvider>
    </Layout>
  )
}

export default withTranslation()(EditionPage)
