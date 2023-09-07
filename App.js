import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sent from './screens/Send';
import Coin from './screens/Coin';


export default function App() {
  const Drawer = createDrawerNavigator()
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerBackVisible: false}}>
      <Stack.Screen name='Home' component={Home} options={{ headerBackVisible: false, headerTitle: false}} />
      <Stack.Screen name='Coin' component={Coin} options={{ headerBackVisible: false, headerTitle: false}}/>
      <Stack.Screen name='Send' component={Sent} options={{ headerBackVisible: false, headerTitle: false}} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });
