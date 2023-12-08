import { Dimensions } from 'react-native'

const Layout = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
}

const Fonts = {
  bold: 'Rubik-Bold',
  regular: 'Rubik-Regular',
}

const Colors = {
  primary: '#FFB6C1',
}

export const Constants = {
  Layout,
  Fonts,
  Colors,
}
