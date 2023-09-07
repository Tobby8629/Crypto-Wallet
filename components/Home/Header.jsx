import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons"
import AntDesign from "@expo/vector-icons/AntDesign"
import { SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = ({title}) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor: '#a791c0'}}>
      <View className="p-3 items-center justify-between flex-row-reverse px-7">
       <Text className=" text-2xl text-center capitalize">{title}</Text>
       <View className="flex-row items-center justify-between w-full px-2">
         <View>
           <Ionicons name='menu-outline' size={40} />
         </View>
         <View>
           <AntDesign name='scan1' size={25} />
         </View>
       </View>
      </View>
    </SafeAreaView>
  )
}

export default Header