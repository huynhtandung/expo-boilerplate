import { ReactElement } from 'react'
import { StatusBar, StyleProp, View, ViewStyle } from 'react-native'

interface Props {
  children: ReactElement | ReactElement[]
  style?: StyleProp<ViewStyle>
}

export const Layout = ({ children, style }: Props) => {
  const statusBarHeight = StatusBar.currentHeight

  return (
    <View
      style={[
        {
          flex: 1,
          paddingTop: statusBarHeight,
          backgroundColor: '#fff',
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}
