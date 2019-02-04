//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    backgroundColor: 'white',
    textAlign: 'center',
    color: 'black',
    width: '100%',
    height: 35,
    fontSize: 25
}
//Make a Component
const Header = (props) => {
    return <Text style={styles}>{props.header}</Text>
}

export default Header;
//Make the component available to other parts of the app

