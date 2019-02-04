import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';

//Destructuring
const AlbumDetail = ({ album }) => {
    const {
        title, 
        artist, 
        image,
        url,
        thumbnail_image
    } = album;

    const { 
        thumbnailStyle, 
        headerContentStyle, 
        thumbnailContainerStyle, 
        headerTextStyle, 
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: image }}/>
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now    
                </Button>
            </CardSection>
        </Card>      
    );
};


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50 
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    //trick react native for styling  flex and with width: null 
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}

export default AlbumDetail; 