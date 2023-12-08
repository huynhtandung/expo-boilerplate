import { useNavigation, NavigationProp } from '@react-navigation/native'

import { RootStackParamList } from '@/types/navigation'

export const useNavigate = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return navigation.navigate
}
