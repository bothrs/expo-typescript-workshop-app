import { CrossIcon } from '../icons/CrossIcon'
import { RetryIcon } from '../icons/RetryIcon'

import { StPressable } from './PressableIcon.styled'

import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  icon: 'cross' | 'retry'
  onPress: (event: GestureResponderEvent) => void
}

export const PressableIcon = ({ style, icon, onPress }: Props) => {
  return (
    <StPressable style={style} onPress={onPress}>
      {icon === 'cross' && <CrossIcon />}
      {icon === 'retry' && <RetryIcon />}
    </StPressable>
  )
}
