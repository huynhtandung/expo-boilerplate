import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from '@/screens/HomeScreen'
import SettingsScreen from '@/screens/SettingsScreen'
import StoriesScreen from '@/screens/StoriesScreen'

const Tab = createMaterialTopTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" tabBar={() => null}>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Stories" component={StoriesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
