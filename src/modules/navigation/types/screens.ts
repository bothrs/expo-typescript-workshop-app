import type { StackNavigationProp } from '@react-navigation/stack'

export type NavigationParameterList = {
  Home: { hasPostedPhoto: true } | undefined
  Camera: undefined
  UploadPhoto: undefined
}

export type NavigationScreenNames = keyof NavigationParameterList

export type NavigationRouteProp = StackNavigationProp<
  NavigationParameterList,
  NavigationScreenNames
>
