import { StTextInput } from './MessageInput.styled'

import type { TextInputProps } from 'react-native'

export const MessageInput = ({ ...props }: TextInputProps) => {
  return <StTextInput {...props} placeholderTextColor="#f9f9f9" />
}
