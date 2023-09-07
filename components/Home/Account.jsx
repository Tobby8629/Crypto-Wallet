import { View, Text, TouchableOpacity } from 'react-native'
import Balance from './Balance'

const Account = () => {
  return (
    <View className="px-8">
      <Balance />
      <View className="my-2 items-center">
        <Text className="text-5xl font-semibold">$220,000.60</Text>
        <Text className=" text-green-700 mt-1 text-2xl font-medium">+$300.10</Text>
      </View> 
    </View>
  )
}

export default Account