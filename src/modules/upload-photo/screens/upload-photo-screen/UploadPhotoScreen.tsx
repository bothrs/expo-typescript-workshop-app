import { useNavigation, useRoute } from '@react-navigation/core'
import { KeyboardAvoidingView, Platform } from 'react-native'

import { ImageBackground } from '../../../shared/components/image-background'
import { PageView } from '../../../shared/components/page-view'
import { PressableIcon } from '../../../shared/pressable-icon'
import { MessageInput } from '../../components/message-input'
import { UploadButton } from '../../components/upload-button'
import { usePhotoUpload } from '../../hooks/usePhotoUpload'

import { StSpacing } from './UploadPhotoScreen.styled'

import type {
  NavigationParameterList,
  NavigationRouteProp,
} from '../../../navigation/types/screens'
import type { RouteProp } from '@react-navigation/core'

export const UploadPhotoScreen = () => {
  const { params } =
    useRoute<RouteProp<NavigationParameterList, 'UploadPhoto'>>()
  const { navigate, goBack, popToTop } = useNavigation<NavigationRouteProp>()

  const {} = usePhotoUpload()

  const uploadPhoto = async () => {
    // Navigate back to home screen
    navigate('Home', { hasPostedPhoto: true })
  }

  return (
    <ImageBackground imageSrc={params.image.uri}>
      <PageView>
        <PressableIcon icon="cross" onPress={() => popToTop()} />
        <PressableIcon icon="retry" onPress={() => goBack()} />
        <StSpacing />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <MessageInput placeholder="Tap to add a note" />
        </KeyboardAvoidingView>
        <UploadButton />
      </PageView>
    </ImageBackground>
  )
}
