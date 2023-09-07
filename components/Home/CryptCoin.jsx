import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CryptCoin = ({image, name, nick, dollar, coin}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity className="mb-5 flex-row items-center justify-between" onPress={()=> navigation.navigate('Coin')}>

      <View className="flex-row items-center">
        <Image source={image} className="h-12 w-12 rounded-full"/>
        <View className="ml-4">
          <Text className="text-gray-200 text-xl font-medium capitalize">{name}</Text>
          <Text className="text-gray-500 text-lg">{nick}</Text>
        </View>
      </View>

      <View className="ml-4">
        <Text className="text-gray-200 text-xl font-medium capitalize">${dollar}</Text>
        <Text className="text-gray-500 text-lg">{coin}</Text>
     </View>

    </TouchableOpacity>
  )
}

export default CryptCoin