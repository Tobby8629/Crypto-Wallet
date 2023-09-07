import React from 'react'
import { FlatList } from 'react-native'
import coins from '../../assets/coins'
import { View } from 'react-native'
import CryptCoin from './CryptCoin'


const CryptCoins = () => {
  return (
    <View className="p-8 bg-black h-full rounded-3xl mt-4 flex-1">
        <FlatList
         data={coins}
         renderItem={({item: coin})=>(
            <CryptCoin name={coin.name} nick={coin.nick} 
            dollar={coin.dollar} coin={coin.coin} image={coin.image}/>
         )}
         keyExtractor={(coin)=> coin.id.toString()
         }
        />
    </View>
  )
}

export default CryptCoins