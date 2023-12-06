import { Text, View } from 'react-native'

import Layout from '@/components/Layout'

const HomeScreen = () => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Home</Text>
      </View>
    </Layout>
  )
}

export default HomeScreen
