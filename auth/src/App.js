import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Header, Button, Spinner } from './Components/Common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';


class App extends Component {
    state = {
        loggedIn: null
    }
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

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false })
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor:'white', height: '100%'}}>
                <Header 
                    header="Authentication" 
                />
                {this.renderContent()}
            </SafeAreaView>
        )
    }
}

export default App;