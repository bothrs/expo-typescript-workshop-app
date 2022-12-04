import type { StackNavigationProp } from '@react-navigation/stack'
import type { CameraCapturedPicture } from 'expo-camera'

export type NavigationParameterList = {
  Home: { hasPostedPhoto: true } | undefined
  Camera: undefined
  UploadPhoto: { image: CameraCapturedPicture }
}

export type NavigationScreenNames = keyof NavigationParameterList

export type NavigationRouteProp = StackNavigationProp<
  NavigationParameterList,
  NavigationScreenNames
>
