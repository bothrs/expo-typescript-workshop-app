import * as Font from 'expo-font'
import { useEffect, useState } from 'react'

export const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  const customFonts = {
    'Nimbus Sans D OT': require('../../../../assets/fonts/Nimbus-Sans-D-OT-Black-Extended_32740.ttf'),
    'Nimbus Sans': require('../../../../assets/fonts/Nimbus-Sans-D-OT-Black-Extended_32740.ttf'),
    'Nimbus-Sans': require('../../../../assets/fonts/Nimbus-Sans-D-OT-Black-Extended_32740.ttf'),
  }

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync(customFonts)
        setFontsLoaded(true)
      } catch (error) {
        console.error(error)
      }
    }
    loadFonts()
  }, [])

  return fontsLoaded
}
