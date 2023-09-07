import { View, Text, Modal, Image, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import Octicons from '@expo/vector-icons/Octicons'
import Feather from '@expo/vector-icons/Feather'


const Receive = ({modal,setmodal}) => {
  return (
    <Modal visible={modal} animationType='slide' transparent={true} className="flex-1 py-0 my-0" >
      <View className="mt-auto bg-black rounded-3xl px-5" style={{height: "68%"}}>
      <Pressable className="items-center py-4" onPress={()=>setmodal(false)}>
        <Image source={require("../../assets/bar.png")} />
      </Pressable>
      <Text className="text-gray-200 text-2xl font-medium text-center">QR code</Text>
      <Image source={require('../../assets/QR.png')} className="h-65 w-55 my-4 mx-auto rounded-3xl" />
      <View  className="flex-row w-5/12 my-2 mx-auto justify-between">
        <View className="items-center">
          <View className="bg-gray-500 p-4 rounded-full">
            <FontAwesome5 name="copy" color={"white"} size={20} />
          </View>
            <Text className='text-gray-300 my-2 text-lg'>Copy</Text>
          </View>
        <View className="items-center">
          <View className="bg-gray-500 p-4 rounded-full">
            <Feather name="share" color={"white"} size={20} />
          </View>
            <Text className='text-gray-300 my-2 text-lg'>Send</Text>
          </View>
      </View>
      </View>
    </Modal>
  )
}

export default Receive