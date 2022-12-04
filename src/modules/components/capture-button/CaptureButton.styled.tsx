import { Canvas } from '@shopify/react-native-skia'
import styled from 'styled-components/native'

export const StContainer = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
`

export const StPressable = styled.Pressable`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  border: 4px solid #9e00ff;
  /* background-color: rgba(24, 23, 31, 0.1); */
`

export const StCanvas = styled(Canvas)`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
`

export const StInnerRing = styled.View`
  width: 55px;
  height: 55px;
  border-radius: 35px;
  border: 3px solid #380855;
`
