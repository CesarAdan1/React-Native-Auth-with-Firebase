import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    textAlign: 'center',
    color: 'black',
    width: '100%',
    height: 35,
    fontSize: 25
}

const Header = (props) => {
    return <Text style={styles}>{props.header}</Text>
}

export { Header };


