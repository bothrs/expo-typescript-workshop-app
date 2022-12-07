import {
  StContainer,
  StPlusIcon,
  StProgress,
  StLabel,
} from './UploadButton.styled'

import type { GestureResponderEvent, StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  uploadProgress?: number
  isLoading?: boolean
  onPress: (event: GestureResponderEvent) => void
}

export const UploadButton = ({
  style,
  uploadProgress = 0,
  isLoading = false,
  onPress,
}: Props) => {
  return (
    <StContainer style={style} onPress={onPress}>
      {uploadProgress === 0 && !isLoading && <StPlusIcon />}
      {uploadProgress > 0 && (
        <StProgress style={{ width: `${uploadProgress}%` }} />
      )}
      {uploadProgress > 0 && <StLabel>{Math.floor(uploadProgress)}%</StLabel>}
    </StContainer>
  )
}
