import Main from "./screens/MainComponent";
import { NavigationContainer } from '@react-navigation/native';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {
  return (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
  )
}

