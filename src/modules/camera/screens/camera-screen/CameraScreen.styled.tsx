import { Canvas } from '@shopify/react-native-skia'
import { Camera } from 'expo-camera'
import styled from 'styled-components/native'

export const StCamera = styled(Camera)`
  height: 100%;
`

export const StCaptureButtonContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`

export const StFiller = styled.View`
  flex: 1;
`

export const StCloseButtonContainer = styled.View`
  width: 40px;
  width: 40px;
  position: relative;
`

export const StCanvas = styled(Canvas)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -5px;
  left: -5px;
  border-radius: 25px;
`
