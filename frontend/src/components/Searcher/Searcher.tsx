import Button from '@/components/Button/Button'
import SearchIcon from '@mui/icons-material/Search'
import { FC, Fragment, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { toast } from 'sonner'
import styles from './searcher.module.scss'

type SearcherProps = WithTranslation

export const Searcher: FC<SearcherProps> = ({ t }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleToggle = () => {
    setIsClicked((prev) => !prev)
    toast.message(t('feature-not-available'), {
      description: t('coming-soon-msg') || '',
    })
  }

  return (
    <Fragment>
      <Button
        className={styles.button}
        variant="outlined"
        color="primary"
        size="small"
        startIcon={<SearchIcon />}
        onClick={handleToggle}
      >
        <span className={styles.description}>{`${t('search')}...`}</span>
      </Button>
      {/* {isClicked && <p>open modal with search content</p>} */}
    </Fragment>
  )
}

export default withTranslation()(Searcher)
