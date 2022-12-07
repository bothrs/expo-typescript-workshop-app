import {
  StContainer,
  StPlusIcon,
  StProgress,
  StLabel,
} from './UploadButton.styled'

import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  uploadProgress: number
  onPress: (event: GestureResponderEvent) => void
}

export const UploadButton = ({ style, uploadProgress = 0, onPress }: Props) => {
  return (
    <StContainer
      style={style}
      onPress={uploadProgress === 0 ? onPress : undefined}
    >
      {uploadProgress === 0 && <StPlusIcon />}
      {uploadProgress > 0 && (
        <StProgress style={{ width: `${uploadProgress}%` }} />
      )}
      {uploadProgress > 0 && <StLabel>{Math.floor(uploadProgress)}%</StLabel>}
    </StContainer>
  )
}
