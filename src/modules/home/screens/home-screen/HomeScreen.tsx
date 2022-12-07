import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/core'
import { useState } from 'react'

import { GradientBackground } from '../../../shared/components/gradient-background'
import { Title } from '../../../shared/components/title'
import { CameraButton } from '../../components/camera-button'

import { StPageView } from './HomeScreen.styled'

import type {
  NavigationParameterList,
  NavigationRouteProp,
} from '../../../navigation/types/screens'
import type { RouteProp } from '@react-navigation/core'

export const HomeScreen = () => {
  const { navigate } = useNavigation<NavigationRouteProp>()
  const { params } = useRoute<RouteProp<NavigationParameterList, 'Home'>>()

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  useFocusEffect(() => {
    if (params?.hasPostedPhoto) {
      setShowSuccessMessage(true)
      // Set timeout to hide the message after time
      const timeout = setTimeout(() => {
        navigate('Home', undefined)
      }, 4000)

      // Clear timeout if component get's unmounted before time
      return () => {
        clearTimeout(timeout)
      }
    } else {
      setShowSuccessMessage(false)
    }
  })

  const navigateToCamera = () => {
    navigate('Camera')
  }

  return (
    <GradientBackground>
      <StPageView>
        <Title>{showSuccessMessage ? 'NICE\nONE!' : 'ADD\nPOST'}</Title>
        <CameraButton onPress={navigateToCamera} />
      </StPageView>
    </GradientBackground>
  )
}
