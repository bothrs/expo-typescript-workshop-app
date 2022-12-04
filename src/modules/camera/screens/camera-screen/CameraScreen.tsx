import { CaptureButton } from '../../../components/capture-button'
import { PageView } from '../../../shared/components/page-view'

import { StCamera } from './CameraScreen.styled'

export const CameraScreen = () => {
  const capturePhoto = () => {
    console.log('Take')
  }

  return (
    <StCamera>
      <PageView>
        <CaptureButton onPress={() => capturePhoto()} />
      </PageView>
    </StCamera>
  )
}
