import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { money_in, money_out, addUserToState } from '../redux/action';

export default function Screen_02(props) {
    const dispatch = useDispatch();
    const currentUser = props.route.params;
    const [user, setUser] = useState(currentUser);
    dispatch(addUserToState(user));
    const [content, setContent] = useState('');
    const [amount, setAmount] = useState(0);
    
    const state = useSelector(state => state.users[0]);
    useEffect(() => {
        setUser(state);
    }, [state]);

    const handleMoneyIn = () => {
        const c = content;
        const a = amount;
        dispatch(money_in(c, a));
    }
    const handleMoneyOut = () => {
        const c = content;
        const a = amount;
        dispatch(money_out(c, a));
    }
    const updateToApi = () => {
        const u = {
            id: user.id,
            email: user.email,
            password: user.password,
            money_in: user.money_in,
            money_out: user.money_out
        }
        fetch(`https://6572ab32192318b7db407eff.mockapi.io/users/${user.id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(u)
        }).then(async res => {
            if (res.ok) {
                alert('Update successfully');
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
            <ScrollView>
                <Text>Welcome</Text>
                <Text style={{ fontSize: 15, margin: 10 }}> ID: {user.id}</Text>
                <Text style={{ fontSize: 15, margin: 10 }}> Email: {user.email}</Text>
                <Text style={{ fontSize: 15, margin: 10 }}>Money_In: </Text>
                <View>
                    {user.money_in.map((item, index) => {
                        return (
                            <Text style={{ fontSize: 15, margin: 10, borderWidth: 1, padding: 5 }} key={index}>{item.content} - {item.amount}</Text>
                        )
                    })}
                </View>
                <Text style={{ fontSize: 15, margin: 10 }}>Money_Out: </Text>
                <View>
                    {user.money_out.map((item, index) => {
                        return (
                            <Text style={{ fontSize: 15, margin: 10, borderWidth: 1, padding: 5 }} key={index}>{item.content} - {item.amount}</Text>
                        )
                    })}
                </View>
                <View style={{borderWidth: 1, borderColor: 'pink', borderRadius: 20}}>
                <View>
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, margin: 20 }} placeholder='content' onChangeText={setContent} />
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, margin: 20 }} placeholder='amount' onChangeText={setAmount} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.btn} onPress={handleMoneyIn}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Money_In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={handleMoneyOut}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Money_Out</Text>
                    </TouchableOpacity>

                </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={updateToApi}>
                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Update</Text>
                </TouchableOpacity>
            </ScrollView>
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
    btn: {
        height: 40,
        width: 100,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
});
