import { useTheme } from '@/store/Theme/useTheme'
import CustomForm from './CustomForm/CustomForm'
import GenericForm from './GenericForm/GenericForm'
import styles from './editionForm.module.scss'

export default function EditionForm() {
  const { mode } = useTheme()
  return (
    <form className={`${styles.root} ${styles[mode]}`}>
      <GenericForm />
      <CustomForm />
    </form>
  )
}
