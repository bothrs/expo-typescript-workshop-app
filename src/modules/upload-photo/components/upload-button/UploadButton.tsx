import {
  StContainer,
  StPlusIcon,
  StProgress,
  StLabel,
} from './UploadButton.styled'

import type { StyleProp, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  uploadProgress?: number
  isLoading?: boolean
}

export const UploadButton = ({
  style,
  uploadProgress = 0,
  isLoading = false,
}: Props) => {
  return (
    <StContainer style={style}>
      {uploadProgress === 0 && !isLoading && <StPlusIcon />}
      {uploadProgress > 0 && (
        <StProgress style={{ width: `${uploadProgress}%` }} />
      )}
      {uploadProgress > 0 && <StLabel>67%</StLabel>}
    </StContainer>
  )
}
