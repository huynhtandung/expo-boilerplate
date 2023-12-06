import { ReactElement } from 'react'
import { StatusBar, View } from 'react-native'

interface Props {
  children: ReactElement | ReactElement[]
}

const Layout = ({ children }: Props) => {
  const statusBarHeight = StatusBar.currentHeight

  return (
    <View
      style={{
        flex: 1,
        paddingTop: statusBarHeight,
      }}>
      {children}
    </View>
  )
}

export default Layout
