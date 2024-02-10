import { CustomFieldTypeValue } from '@/definitions/post'
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

export type FormFieldsContextProps = {
  fields: CustomFieldTypeValue[]
  updateFields: Dispatch<SetStateAction<CustomFieldTypeValue[]>>
}

export const FormFieldsContext = createContext({} as FormFieldsContextProps)

interface FormFieldsContextProviderProps {
  children: ReactNode
}

export const FormFieldsContextProvider: FC<FormFieldsContextProviderProps> = ({
  children,
}) => {
  const [fields, setFields] = useState<CustomFieldTypeValue[]>([])

  return (
    <FormFieldsContext.Provider
      value={{
        fields,
        updateFields: setFields,
      }}
    >
      {children}
    </FormFieldsContext.Provider>
  )
}
