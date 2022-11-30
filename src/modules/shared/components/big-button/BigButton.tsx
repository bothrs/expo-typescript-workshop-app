import { StContainer } from './BigButton.styled'

import type { ReactNode } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

export const BigButton = ({ children, style }: Props) => {
  return <StContainer style={style}>{children}</StContainer>
}
