import { RadialGradient, Rect, vec } from '@shopify/react-native-skia'

import {
  StCanvas,
  StContainer,
  StInnerRing,
  StPressable,
} from './CaptureButton.styled'

import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  onPress: (event: GestureResponderEvent) => void
}

export const CaptureButton = ({ style, onPress }: Props) => {
  return (
    <StContainer>
      <StCanvas>
        <Rect x={0} y={0} width={100} height={100}>
          <RadialGradient
            c={vec(50, 50)}
            r={50}
            colors={['#18171f4d', '#18171f4d', '#18171f4d', 'transparent']}
          />
        </Rect>
      </StCanvas>
      <StPressable style={style} onPress={onPress}>
        <StInnerRing />
      </StPressable>
    </StContainer>
  )
}
