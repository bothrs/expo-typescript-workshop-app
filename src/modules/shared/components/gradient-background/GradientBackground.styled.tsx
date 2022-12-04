import { Canvas } from '@shopify/react-native-skia'
import styled from 'styled-components/native'

export const StContainer = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const StBackgroundImage = styled.ImageBackground`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const StCanvas = styled(Canvas)`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`
