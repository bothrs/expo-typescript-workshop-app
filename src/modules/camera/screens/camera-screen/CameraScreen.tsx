import { useNavigation } from '@react-navigation/core'
import { RadialGradient, Rect, vec } from '@shopify/react-native-skia'
import { useRef } from 'react'

import { PageView } from '../../../shared/components/page-view'
import { PressableIcon } from '../../../shared/pressable-icon'
import { CaptureButton } from '../../components/capture-button'

import {
  StCamera,
  StCanvas,
  StCaptureButtonContainer,
  StCloseButtonContainer,
  StFiller,
} from './CameraScreen.styled'

import type { NavigationRouteProp } from '../../../navigation/types/screens'
import type { Camera } from 'expo-camera'

export const CameraScreen = () => {
  const cameraRef = useRef<Camera>(null)
  const { navigate, goBack } = useNavigation<NavigationRouteProp>()

  const capturePhoto = async () => {
    const image = await cameraRef.current?.takePictureAsync()

    if (image) {
      navigate('UploadPhoto', { image })
    }
  }

  return (
    <StCamera ref={cameraRef}>
      <PageView>
        <StCloseButtonContainer>
          <StCanvas>
            <Rect x={0} y={0} width={50} height={50}>
              <RadialGradient
                c={vec(25, 25)}
                r={25}
                colors={['#18171f31', '#18171f31', '#18171f31', 'transparent']}
              />
            </Rect>
          </StCanvas>
          <PressableIcon icon="cross" onPress={() => goBack()} />
        </StCloseButtonContainer>
        <StFiller />
        <StCaptureButtonContainer>
          <CaptureButton onPress={() => capturePhoto()} />
        </StCaptureButtonContainer>
      </PageView>
    </StCamera>
  )
}
