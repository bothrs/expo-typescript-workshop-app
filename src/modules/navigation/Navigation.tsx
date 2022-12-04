import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { CameraScreen } from '../camera/screens/camera-screen'
import { HomeScreen } from '../home/screens/home-screen'
import { UploadPhotoScreen } from '../upload-photo/screens/upload-photo-screen'

import type { NavigationParameterList } from './types/screens'

const Stack = createStackNavigator<NavigationParameterList>()

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="UploadPhoto" component={UploadPhotoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
