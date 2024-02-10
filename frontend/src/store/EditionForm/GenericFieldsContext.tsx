import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export type GenericFieldsContextProps = {
  subjectId: number
  setSubjectId: Dispatch<SetStateAction<number>>
}

export const GenericFieldsContext = createContext(
  {} as GenericFieldsContextProps
)

interface GenericFieldsContextProviderProps {
  children: ReactNode
}

export const GenericFieldsContextProvider: FC<
  GenericFieldsContextProviderProps
> = ({ children }) => {
  const [subjectId, setSubjectId] = useState<number>(0)

  return (
    <GenericFieldsContext.Provider
      value={{
        subjectId,
        setSubjectId,
      }}
    >
      {children}
    </GenericFieldsContext.Provider>
  )
}
