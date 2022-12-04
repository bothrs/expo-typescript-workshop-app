import { useNavigation, useRoute } from '@react-navigation/core'
import { useEffect, useState } from 'react'

import { CameraButton } from '../../components/camera-button'
import { GradientBackground } from '../../../shared/components/gradient-background'
import { Title } from '../../../shared/components/title'

import { StPageView } from './HomeScreen.styled'

import type {
  NavigationParameterList,
  NavigationRouteProp,
} from '../../../navigation/types/screens'
import type { RouteProp } from '@react-navigation/core'

export const HomeScreen = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const { params } = useRoute<RouteProp<NavigationParameterList, 'Home'>>()
  const { navigate } = useNavigation<NavigationRouteProp>()

  useEffect(() => {
    if (params?.hasPostedPhoto) {
      // Show success message if photo was posted
      setShowSuccessMessage(true)

      // Set timeout to hide the message after time
      const timeout = setTimeout(() => {
        setShowSuccessMessage(false)
      }, 2000)

      // Clear timeout if component get's unmounted before time
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [params?.hasPostedPhoto])

  const navigateToCamera = () => {
    navigate('Camera')
  }

  return (
    <GradientBackground>
      <StPageView>
        <Title>{showSuccessMessage ? 'NICE ONE!' : 'ADD POST'}</Title>
        <CameraButton onPress={navigateToCamera} />
      </StPageView>
    </GradientBackground>
  )
}
