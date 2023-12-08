import CloudRainIcon from 'assets/icons/cloud-rain.svg'
import PlusIcon from 'assets/icons/plus.svg'
import SettingIcon from 'assets/icons/setting.svg'
import StoryIcon from 'assets/icons/story.svg'
import SunIcon from 'assets/icons/sun.svg'
import BgImage from 'assets/images/bg.jpg'
import { useEffect } from 'react'
import { ImageBackground, View } from 'react-native'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
} from 'react-native-reanimated'

import { BorderCircle, Layout, WaveAnimation, BoldText, RegularText } from '@/components'
import { formatDate, getDateDifference, getTotalDays, Constants, useNavigate } from '@/helpers'

const duration = 1000

export const HomeScreen = () => {
  const navigate = useNavigate()
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  useEffect(() => {
    scale.value = withRepeat(withTiming(0.8, { duration, easing: Easing.linear }), -1, true)
  }, [])

  const size = Math.round(Constants.Layout.windowWidth * 0.75)
  const beginDate = '2023-1-09T07:29:37.824Z'
  const currentDate = new Date().toISOString()
  const totalDays = getTotalDays(beginDate, currentDate)
  const daysDiff = getDateDifference(beginDate, currentDate)

  return (
    <Layout>
      <ImageBackground
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
        source={BgImage}
      >
        <View
          style={{
            height: '70%',
          }}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
            }}
          >
            <SettingIcon width={32} height={32} onPress={() => navigate('Settings')} />
            <StoryIcon width={32} height={32} onPress={() => navigate('Stories')} />
          </View>
          <View
            style={{
              flexGrow: 1,
              height: 0,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
            }}
          >
            <BorderCircle size={size}>
              <RegularText text="Lorem" size={32} />
              <BoldText text={totalDays} size={64} />
              <RegularText text="Lorem" size={32} />
            </BorderCircle>
            <View style={{ alignItems: 'center' }}>
              <RegularText
                text={`${formatDate(beginDate)} - ${formatDate(currentDate)}`}
                size={16}
              />
              <RegularText text={daysDiff} size={16} />
            </View>
          </View>
        </View>
        <WaveAnimation />
        <View
          style={{
            height: '30%',
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 40,
          }}
        >
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <BorderCircle
              size={100}
              borderLeft={1}
              borderRight={4}
              style={{ backgroundColor: 'gray', borderWidth: 1 }}
            >
              <PlusIcon width={20} height={20} />
            </BorderCircle>
            <RegularText text="Text1" style={{ marginTop: 16 }} color="#000" />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <CloudRainIcon width={20} height={20} />
              <RegularText text="Cloud Rain" color="#000" />
            </View>
          </View>
          <Animated.View style={[animatedStyle, { paddingTop: 70 }]}>
            <SunIcon width={64} height={64} />
          </Animated.View>
          <View
            style={{
              alignItems: 'center',
            }}
          >
            <BorderCircle
              size={100}
              borderLeft={1}
              borderRight={4}
              style={{ backgroundColor: 'gray' }}
            >
              <PlusIcon width={20} height={20} />
            </BorderCircle>
            <RegularText text="Text2" style={{ marginTop: 16 }} color="#000" />
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <CloudRainIcon width={20} height={20} />
              <RegularText text="Cloud Rain" color="#000" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Layout>
  )
}
