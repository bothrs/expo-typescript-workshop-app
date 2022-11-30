import { Camera } from 'expo-camera'
import { useEffect } from 'react'

import { Navigation } from '../navigation/Navigation'

import { useHideSplash } from './hooks/useHideAsync'

export const App = () => {
  const allLoaded = useHideSplash()

  const [permission, requestPermission] = Camera.useCameraPermissions()

  useEffect(() => {
    if (allLoaded && !permission?.granted) {
      requestPermission()
    }
  }, [permission?.granted, requestPermission, allLoaded])

  if (!allLoaded) {
    return null
  }

  return <Navigation />
}
