import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

import { Constants } from '@/helpers'
import { HomeScreen, SettingsScreen, StoriesScreen } from '@/screens'
import { RootStackParamList } from '@/types'

const Tab = createMaterialTopTabNavigator<RootStackParamList>()

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    [Constants.Fonts.bold]: require('./assets/fonts/Rubik-Bold.ttf'),
    [Constants.Fonts.regular]: require('./assets/fonts/Rubik-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Tab.Navigator initialRouteName="Home" tabBar={() => null}>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Stories" component={StoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
