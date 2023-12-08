import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Screen_01() {
    const [email, setEmail] = useState('abc@gmail.com');
    const [password, setPassword] = useState('abcd1234');
    const navigation = useNavigation();
    const login = async () => {
        fetch('https://6572ab32192318b7db407eff.mockapi.io/users', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(async res => {
  if (res.ok) {
    const user = await res.json();
    const currentUser = user.find(u => u.email === email && u.password === password);
    if (currentUser) {
        navigation.navigate('Screen_02', currentUser);
    } else {
        alert('Wrong email or password');
    }
  }
  // handle error
}).then(tasks => {
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})
    }
  return (
    <View style={styles.container}>
        <TextInput  style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, margin: 20}} placeholder='email' onChangeText={setEmail} value={email}/>
        <TextInput  style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, margin: 20}} placeholder='password' onChangeText={setPassword} value={password}/>
        <TouchableOpacity style={{height: 40, width: 100, backgroundColor: 'green', justifyContent:'center', alignItems:'center'}} onPress={login}>
            <Text>Continue</Text>
        </TouchableOpacity>
    </View>
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
