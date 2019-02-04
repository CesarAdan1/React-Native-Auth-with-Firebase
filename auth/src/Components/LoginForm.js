import React, { Component } from 'react';
import {  Text } from 'react-native';
import { Button, Card, CardSection, Input } from './Common';
import firebase from 'firebase';


class LoginForm extends Component {
    state = { 
        email: '',
        password: ''
    };

    onButtonPress() {
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label= "Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection />
                <Button onPress={this.onBottonPress}>
                    Log In
                </Button>
            </Card>
        )
    }
}

export default LoginForm;