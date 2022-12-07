import { useNavigation, useRoute } from '@react-navigation/core'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { ImageBackground } from '../../../shared/components/image-background'
import { PageView } from '../../../shared/components/page-view'
import { PressableIcon } from '../../../shared/pressable-icon'
import { MessageInput } from '../../components/message-input'
import { UploadButton } from '../../components/upload-button'
import { usePhotoUpload } from '../../hooks/usePhotoUpload'

import { StIconsContainer, StSpacing } from './UploadPhotoScreen.styled'

import type {
  NavigationParameterList,
  NavigationRouteProp,
} from '../../../navigation/types/screens'
import type { RouteProp } from '@react-navigation/core'

export const UploadPhotoScreen = () => {
  const { params } =
    useRoute<RouteProp<NavigationParameterList, 'UploadPhoto'>>()
  const { navigate, goBack, popToTop } = useNavigation<NavigationRouteProp>()
  // TODO: Manage input field state

  // The imageUri passed from he previous screen, needed to upload to the backend
  const imageUri = params.image.uri

  // TODO: Use hook return parameters
  const {} = usePhotoUpload()

  const onUpload = async () => {
    // TODO: Upload photo (check function types to know which arguments to pass)

    // Navigate back to home screen
    navigate('Home', { hasPostedPhoto: true })
  }

  return (
    <ImageBackground imageSrc={params.image.uri}>
      <PageView>
        <StIconsContainer>
          <PressableIcon icon="cross" onPress={() => popToTop()} />
          <PressableIcon icon="retry" onPress={() => goBack()} />
        </StIconsContainer>
        <StSpacing />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {/* TODO: Link to input state */}
          <MessageInput placeholder="Tap to add a note" />
        </KeyboardAvoidingView>
        {/* TODO: Pass upload progress */}
        <UploadButton onPress={onUpload} />
      </PageView>
    </ImageBackground>
  )
}
