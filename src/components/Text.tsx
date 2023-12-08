import { StyleProp, Text, TextStyle } from 'react-native'

import { Constants } from '@/helpers'

interface Props {
  text: string | number
  size?: number
  color?: string
  style?: StyleProp<TextStyle>
}

export const BoldText = (props: Props) => <BaseText font={Constants.Fonts.bold} {...props} />

export const RegularText = (props: Props) => <BaseText font={Constants.Fonts.regular} {...props} />

interface BaseTextProps extends Props {
  font: string
}

export const BaseText = ({ font, text, size, color, style }: BaseTextProps) => (
  <Text
    style={[
      {
        fontFamily: font,
        color,
        fontSize: size,
      },
      style,
    ]}
  >
    {text}
  </Text>
)

BaseText.defaultProps = {
  color: '#fff',
}
