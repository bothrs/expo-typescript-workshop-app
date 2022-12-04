import { StContainer, StCameraIcon } from './CameraButton.styled'

import type { GestureResponderEvent } from 'react-native'

interface Props {
  onPress: (event: GestureResponderEvent) => void
}

export const CameraButton = ({ onPress }: Props) => {
  return (
    <StContainer onPress={onPress}>
      <StCameraIcon />
    </StContainer>
  )
}
