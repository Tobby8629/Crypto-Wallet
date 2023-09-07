import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign"
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor: '#a791c0'}}>
      <View className="px-6 py-3 items-center justify-between flex-row">
        <AntDesign name='left' size={25} color={'#474444'} onPress={()=> navigation.goBack() }/>
      </View>
    </SafeAreaView>
  )
}

export default Header