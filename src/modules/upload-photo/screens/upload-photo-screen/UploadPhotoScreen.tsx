import { useRoute } from '@react-navigation/core'

import { ImageBackground } from '../../../shared/components/image-background'
import { PageView } from '../../../shared/components/page-view'

import type { NavigationParameterList } from '../../../navigation/types/screens'
import type { RouteProp } from '@react-navigation/core'

export const UploadPhotoScreen = () => {
  const { params } =
    useRoute<RouteProp<NavigationParameterList, 'UploadPhoto'>>()

  return (
    <ImageBackground imageSrc={params.image.uri}>
      <PageView></PageView>
    </ImageBackground>
  )
}
