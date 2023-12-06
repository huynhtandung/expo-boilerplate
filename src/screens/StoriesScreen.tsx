import { Text, View } from 'react-native'

import Layout from '@/components/Layout'

const StoriesScreen = () => {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Stories</Text>
      </View>
    </Layout>
  )
}

export default StoriesScreen
