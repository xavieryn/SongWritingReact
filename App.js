import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import PopOut from './components/PopOut';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  return (
    <NavigationContainer headerShown="false" >
      <PopOut/>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
