import React, { useState } from 'react'
import { View, Text, StatusBar, Button, StyleSheet, ScrollView, Image, TouchableOpacity, TouchableHighlight } from 'react-native'

const Home2 = () => {
    const [counter, setCounter] = useState(0)
    const slogan = (
        <Text style={{ fontSize: 24, fontWeight: '200' }}>
            Explore the
            <Text style={{ fontWeight: 'bold' }}>{' '}
                Beautiful <Text style={{ color: '#F7C954' }}>
                    World</Text>
            </Text>
        </Text>)
    const user = {
        first_name: 'John',
        last_name: 'Doe',
        image: 'https://randomuser.me/api/portraits/men/44.jpg'
    }
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: user.image }} alt={user.image} style={styles.avatar} />
                    <Text>Hi, {user.first_name} {user.last_name}</Text>
                </View>
                <Image source={require("../assets/favicon.png")} />
            </View>
            <Text style={{ paddingLeft: 16 }}>{slogan}</Text>
            <ScrollView
                horizontal={true}
            >
                <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                <Text style={{ fontSize: 96 }}>If you like</Text>
                <Text style={{ fontSize: 96 }}>I mean it</Text>
                <Text style={{ fontSize: 96 }}>😍</Text>
            </ScrollView>
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 96, textAlign: 'center' }}>{counter}</Text>
                <StatusBar style={styles.stBar} />
                <TouchableHighlight
                    //className={styles.btn}
                    underlayColor="maroon"
                    style={styles.btn}
                    onPress={() => {
                        console.log('You tapped the button!');
                        setCounter((prev) => prev + 1)
                    }}
                >
                    <Text style={{ color: 'white', textAlign: 'center' }}>Press Me</Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    stBar: {
        backgroundColor: 'yellow'
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 50,
        marginEnd: 10
    },
    btn: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5
    },

});
export default Home2