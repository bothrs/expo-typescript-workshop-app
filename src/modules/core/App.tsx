import { Camera } from 'expo-camera'
import { useEffect } from 'react'

import { Navigation } from '../navigation/Navigation'

export const App = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions()

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission()
    }
  }, [permission?.granted, requestPermission])

  return <Navigation />
}
