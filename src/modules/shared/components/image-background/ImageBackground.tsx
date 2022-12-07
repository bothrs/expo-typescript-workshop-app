import { LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import { Dimensions } from 'react-native'

import {
  StBackgroundImage,
  StCanvas,
  StContainer,
} from './ImageBackground.styled'

import type { ReactNode } from 'react'

interface Props {
  children?: ReactNode
  imageSrc: string
}

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height + 40

export const ImageBackground = ({ children, imageSrc }: Props) => {
  return (
    <StBackgroundImage source={{ uri: imageSrc }}>
      <StCanvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={screenWidth} height={screenHeight}>
          <LinearGradient
            start={vec(screenWidth / 2, 0)}
            end={vec(screenWidth / 2, screenHeight)}
            colors={[
              'rgba(24, 23, 31, 0.464)',
              'rgba(12, 11, 15, 0.176)',
              'transparent',
              'transparent',
              'rgba(24, 23, 31, 0.8)',
            ]}
            positions={[0, 0.0833, 0.1615, 0.5956, 0.9729]}
          />
        </Rect>
      </StCanvas>
      <StContainer>{children}</StContainer>
    </StBackgroundImage>
  )
}
