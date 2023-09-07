import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'

const Sent = () => {
    const navigation = useNavigation()
   useLayoutEffect(()=>{
   navigation.setOptions({
       headerShown: true,
       header: () => <Header />
     })
 },[])
  return (
    <View>
      <Text>Sent</Text>
    </View>
  )
}

export default Sent