import { ReactElement } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface Props {
  size: number
  borderLeft?: number
  borderRight?: number
  children?: ReactElement | ReactElement[]
  style?: StyleProp<ViewStyle>
}

export const BorderCircle = ({ size, borderLeft, borderRight, children, style }: Props) => {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          backgroundColor: 'transparent',
          borderRadius: size / 2,
          borderLeftWidth: borderLeft,
          borderTopWidth: borderLeft,
          borderRightWidth: borderRight,
          borderBottomWidth: borderRight,
          borderColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

BorderCircle.defaultProps = {
  borderLeft: 2,
  borderRight: 8,
}
