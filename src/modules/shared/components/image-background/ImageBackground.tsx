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
const screenHeight = Dimensions.get('window').height

export const ImageBackground = ({ children, imageSrc }: Props) => {
  return (
    <StBackgroundImage source={{ uri: imageSrc }}>
      <StCanvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={screenWidth} height={screenHeight}>
          <LinearGradient
            start={vec(screenWidth / 2, 0)}
            end={vec(screenWidth / 2, screenHeight)}
            colors={[
              '#18171f76',
              '#0c0b0f2d',
              'transparent',
              'transparent',
              '#18171fcc',
            ]}
            positions={[0, 8.33, 16.15, 59.56, 97.29]}
          />
        </Rect>
      </StCanvas>
      <StContainer>{children}</StContainer>
    </StBackgroundImage>
  )
}
