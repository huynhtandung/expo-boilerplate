import { Text, View } from 'react-native'

import Layout from '@/components/Layout'

const SettingsScreen = () => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Settings</Text>
      </View>
    </Layout>
  )
}

export default SettingsScreen
