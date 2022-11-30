import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen'
import { useEffect } from 'react'

import { useLoadFonts } from '../../core/hooks/useLoadFonts'

export function useHideSplash() {
  const fontsLoaded = useLoadFonts()

  useEffect(() => {
    const asyncEffect = async () => {
      await preventAutoHideAsync()
    }

    asyncEffect()
  }, [])

  useEffect(() => {
    if (fontsLoaded) {
      hideAsync()
    }
  }, [fontsLoaded])

  return fontsLoaded
}
