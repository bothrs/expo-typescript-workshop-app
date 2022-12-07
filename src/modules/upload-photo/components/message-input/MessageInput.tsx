import { StTextInput } from './MessageInput.styled'

import type { TextInputProps } from 'react-native'

export interface Props extends TextInputProps {
  value: string
}

export const MessageInput = ({ ...props }: Props) => {
  return <StTextInput {...props} placeholderTextColor="#f9f9f9" />
}
