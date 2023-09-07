import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Home/Header'
import Account from '../components/Home/Account'
import CryptCoins from '../components/Home/CryptCoins'
import { LinearGradient } from 'expo-linear-gradient'



const Home = () => {
  const navigation = useNavigation()
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      header: () => <Header />
    })
  },[])


  return (
    <LinearGradient colors={['#a791c0','#e8dff3']} locations={[0.05,0.3]} className="bg-gradient-to-b from-purple-300 to-purple-100 h-full flex-1 w-full">
      <Account />
      <CryptCoins />
    </LinearGradient>

  )
}

export default Home