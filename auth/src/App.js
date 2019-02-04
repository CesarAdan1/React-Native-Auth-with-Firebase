import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Header } from './Components/Common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';


class App extends Component {
    //firebas setup in react-native
    componentWillMount() {
        firebase.initializeApp({
                apiKey: "AIzaSyA3OJHkyZsYQWZqB6phBAo5pI6cWRjLeRY",
                authDomain: "auth-e52aa.firebaseapp.com",
                databaseURL: "https://auth-e52aa.firebaseio.com",
                projectId: "auth-e52aa",
                storageBucket: "auth-e52aa.appspot.com",
                messagingSenderId: "59383043973"
        });
    };

    render() {
        return (
            <SafeAreaView style={{backgroundColor:'white'}}>
                <Header headerText="Authentication"/>
                <LoginForm />
            </SafeAreaView>
        )
    }
}

export default App;