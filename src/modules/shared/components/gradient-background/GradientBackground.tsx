import { LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { Dimensions } from 'react-native'

import {
  StBackgroundImage,
  StCanvas,
  StContainer,
} from './GradientBackground.styled'

import type { ReactNode } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height + 40

export const GradientBackground = ({ children }: Props) => {
  return (
    <StContainer>
      <StCanvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={screenWidth} height={screenHeight}>
          <LinearGradient
            start={vec(screenWidth / 2, 0)}
            end={vec(screenWidth / 2, screenHeight)}
            colors={['#18171F', '#380855 ']}
          />
        </Rect>
      </StCanvas>
      <StBackgroundImage
        source={require('../../../../../assets/background.png')}
      >
        {children}
      </StBackgroundImage>
    </StContainer>
  )
}
