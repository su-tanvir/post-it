import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import CustomFormFields from './CustomFormFields/CustomFormFields'
import styles from './customForm.module.scss'

export default function CustomForm() {
  const { fields } = useEditionForm()

  return (
    <section className={styles.custom}>
      <CustomFormFields fields={fields} />
    </section>
  )
}
