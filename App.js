import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import PopOut from './components/PopOut';
import NoteScreen from './screens/NoteScreen'

const Stack = createStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='PopOut' component={PopOut} /> 
        <Stack.Screen name='Note' component={NoteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

