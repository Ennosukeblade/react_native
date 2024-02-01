import React from 'react'
import { Button, StatusBar, Text, View } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#61dafb' }}>
            <Text>Home</Text>
            <Button title='Go to Home2' onPress={() => navigation.navigate('Home2')} />
            <StatusBar backgroundColor="#61dafb" />
        </View>
    )
}

export default Home