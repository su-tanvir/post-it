import { IconType } from '@/definitions/icons'
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export type GenericHeadlineContextProps = {
  icon: IconType | null
  setIcon: Dispatch<SetStateAction<IconType | null>>
  title: string
  setTitle: Dispatch<SetStateAction<string>>
}

export const GenericHeadlineContext = createContext(
  {} as GenericHeadlineContextProps
)

interface GenericHeadlineContextProviderProps {
  children: ReactNode
}

export const GenericHeadlineContextProvider: FC<
  GenericHeadlineContextProviderProps
> = ({ children }) => {
  const [icon, setIcon] = useState<IconType | null>(null)
  const [title, setTitle] = useState('')

  return (
    <GenericHeadlineContext.Provider
      value={{
        icon,
        setIcon,
        title,
        setTitle,
      }}
    >
      {children}
    </GenericHeadlineContext.Provider>
  )
}
