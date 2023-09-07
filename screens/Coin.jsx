import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import Balance from '../components/Home/Balance'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import Receive from '../components/Home/Receive'


export default function Coin () {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
      navigation.setOptions({
        header: ()=> <Header />
      })
    },[])
    const [modal, setmodal] = useState(false)
  return (
    <LinearGradient colors={['#a791c0','#e8dff3']} locations={[0.2,0.5]} className="flex-1 w-full">
     <View className="p-8">
       <Balance />
     </View>
      <View className="flex-row justify-between w-72 my-7 mx-auto">
        <TouchableOpacity className="items-center shadow-2xl" onPress={() => navigation.navigate('Send')}>
          <View className="bg-purple-200 p-4 rounded-full" style={{backgroundColor: "#846ca099"}}>
            <Feather size={25} name='arrow-up-right' />
          </View>
          <Text className="my-2 font-medium text-base text-center">Send</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center shadow-2xl" onPress={() => setmodal(true)}>
          <View className="bg-purple-200 p-4 rounded-full" style={{backgroundColor: "#846ca099"}}>
            <Feather size={25} name='download' />
          </View>
          <Text className="my-2 font-medium text-base text-center">Receive</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center shadow-2xl">
          <View className="bg-purple-200 p-4 rounded-full" style={{backgroundColor: "#846ca099"}}>
            <Ionicons size={25} name='stats-chart-outline' />
          </View>
          <Text className="my-2 font-medium text-base text-center">Buy</Text>
        </TouchableOpacity>
      </View>
      <Receive modal={modal} setmodal={setmodal}/>
    </LinearGradient>
  )
}