import IconPickerModal from '@/components/Modals/IconPickerModal/IconPickerModal'
import { getRandomIcon } from '@/helpers/utils'
import { useEditionForm } from '@/store/EditionForm/useEditionForm'
import { memo, useEffect, useState } from 'react'
import Icon from './Icon'

const IconPicker = () => {
  const { icon, setIcon } = useEditionForm()
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!icon) {
      const icon = getRandomIcon()
      setIcon(icon)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!icon) return null

  const handleIconClick = () => {
    if (!showModal) setShowModal(true)
  }

  return (
    <div style={{ position: 'relative' }}>
      <Icon icon={icon} onClick={handleIconClick} />
      {showModal && (
        <IconPickerModal
          isOpen
          onClose={() => {
            setShowModal(false)
          }}
        />
      )}
    </div>
  )
}

export default memo(IconPicker)
