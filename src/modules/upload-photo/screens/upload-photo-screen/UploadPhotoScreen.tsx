import { useNavigation, useRoute } from '@react-navigation/core'

import { ImageBackground } from '../../../shared/components/image-background'
import { PageView } from '../../../shared/components/page-view'
import { PressableIcon } from '../../../shared/pressable-icon'

import type {
  NavigationParameterList,
  NavigationRouteProp,
} from '../../../navigation/types/screens'
import type { RouteProp } from '@react-navigation/core'

export const UploadPhotoScreen = () => {
  const { params } =
    useRoute<RouteProp<NavigationParameterList, 'UploadPhoto'>>()
  const { navigate, goBack, popToTop } = useNavigation<NavigationRouteProp>()

  return (
    <ImageBackground imageSrc={params.image.uri}>
      <PageView>
        <PressableIcon icon="cross" onPress={() => popToTop()} />
        <PressableIcon icon="retry" onPress={() => goBack()} />
      </PageView>
    </ImageBackground>
  )
}
