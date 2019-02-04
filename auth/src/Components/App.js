import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Header } from './Common'


class App extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor:'white'}}>
                <Header headerText="Authentication" />
            </SafeAreaView>
        )
    }
}

export default App;