import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { StContainer } from './PageView.styled'

import type { ReactNode } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

export const PageView = ({ children, style }: Props) => {
  const { top, bottom } = useSafeAreaInsets()

  return (
    <StContainer
      style={style}
      insets={{ top: top, bottom: 36 - bottom < 0 ? bottom : 36 }}
    >
      {children}
    </StContainer>
  )
}
