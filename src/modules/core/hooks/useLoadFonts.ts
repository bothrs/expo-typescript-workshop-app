import * as Font from 'expo-font'
import { useEffect, useState } from 'react'

/* --- useLoadFonts() -------------------------------------------------------------------------- */

export const useLoadFonts = () => {
  // State
  const [fontsLoaded, setFontsLoaded] = useState(false)

  // -- Custom Fonts --
  const customFonts = {
    'Nimbus Sans D OT': require('../../../assets/fonts/Nimbus-Sans-D-OT-Black-Extended_32740.ttf'),
    'Nimbus Sans': require('../../../assets/fonts/Nimbus-Sans-D-OT-Black-Extended_32740.ttf'),
    'Nimbus-Sans': require('../../../assets/fonts/Nimbus-Sans-D-OT-Black-Extended_32740.ttf'),
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

  // -- Return --

  return fontsLoaded
}
