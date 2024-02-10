import { useTheme } from '@/store/Theme/useTheme'
import GenericFormFields from './GenericFormFields/GenericFormFields'
import GenericFormHeadline from './GenericFormHeadline/GenericFormHeadline'
import styles from './genericForm.module.scss'

export default function GenericForm() {
  const { mode } = useTheme()
  return (
    <section className={`${styles.generic} ${styles[mode]}`}>
      <GenericFormHeadline />
      <GenericFormFields />
    </section>
  )
}
