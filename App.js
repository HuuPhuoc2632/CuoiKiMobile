import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_01 from './screen/Screen_01';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen_02 from './screen/Screen_02';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
<Provider store={store}>
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_02" component={Screen_02} />
      </Stack.Navigator>
    </NavigationContainer>
</Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
