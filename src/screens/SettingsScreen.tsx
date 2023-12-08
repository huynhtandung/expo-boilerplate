import { Text, View } from 'react-native'

import { Layout } from '@/components'

export const SettingsScreen = () => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Settings</Text>
      </View>
    </Layout>
  )
}
