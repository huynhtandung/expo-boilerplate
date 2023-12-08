import {
  Canvas,
  LinearGradient,
  Path,
  Skia,
  useClockValue,
  useComputedValue,
  useValue,
  vec,
} from '@shopify/react-native-skia'
import { curveBasis, line } from 'd3'
import { View } from 'react-native'

import { Constants } from '@/helpers'

const width = Constants.Layout.windowWidth
const height = Constants.Layout.windowHeight * 0.28
const frequency = 3
const initialAmplitude = 25
const initialVerticalOffset = 25
const animationSpeedMultiplier = 0.15

export const WaveAnimation = () => {
  const verticalOffset = useValue(initialVerticalOffset)
  const amplitude = useValue(initialAmplitude)
  const clock = useClockValue()

  const createWavePath = (phase = 20) => {
    const points: any[] = Array.from({ length: width }, (_, index) => {
      const angle = (index / width) * (Math.PI * frequency) + phase
      return [index, amplitude.current * Math.sin(angle) + verticalOffset.current]
    })
    const lineGenerator = line().curve(curveBasis)
    const waveLine = lineGenerator(points)
    const bottomLine = `L${width},${height} L${0}, ${height}`
    return `${waveLine} ${bottomLine} Z`
  }

  const animatedPath = useComputedValue(() => {
    const current = ((clock.current * animationSpeedMultiplier) / 255) % 255
    const start = Skia.Path.MakeFromSVGString(createWavePath(current))
    const end = Skia.Path.MakeFromSVGString(createWavePath(Math.PI * current))
    return start?.interpolate(end!, 0.5)
  }, [clock, verticalOffset])

  const gradientStart = useComputedValue(() => {
    return vec(0, verticalOffset.current)
  }, [verticalOffset])

  const gradientEnd = useComputedValue(() => {
    return vec(0, verticalOffset.current + 500)
  }, [verticalOffset])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height,
      }}
    >
      <Canvas style={{ flex: 1 }}>
        <Path path={animatedPath as any} style="fill" color="white">
          <LinearGradient start={gradientStart} end={gradientEnd} colors={['white', 'white']} />
        </Path>
      </Canvas>
    </View>
  )
}
