import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather'

const Balance = () => {
    const value = 'qegfkjfejhfie'
    const [state, setstate] = useState(true)
    const [tin, settin] = useState("")
    const star = () => {
      if(state){
        settin("*".repeat(value.length))
      }
      else {
        settin(value)
      }
    }
    useEffect(()=>{
        star()
    },[star])
  return (
    <View className="flex-row justify-between bg-white px-6 h-28 rounded-3xl items-center my-3">
      <View>
        <Text className="text-lg mb-1">Wallet Address</Text>
        <TextInput
        value={tin} 
        className="w-48 text-2xl"  
        />
      </View>
      <View>
        {state ? <Feather name='eye-off' size={18} onPress={()=> setstate(false)}/> : <Feather name='eye' size={18} onPress={()=> setstate(true)}/>  }
      </View>
      </View>
  )
}

export default Balance