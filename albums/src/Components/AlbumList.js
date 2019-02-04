import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

const styles = {
    backgroundColor: "white",
    color: 'black', 
}

class AlbumList extends Component {
    //class level property, component level state
    state = {
        albums: [],
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                response => this.setState({ albums: response.data 
                }));
    }
//Create the method
    renderAlbums() {
        return this.state.albums.map(album => 
        <AlbumDetail 
            key={album.title} 
            album={album}
        />
        );
    }

  render() {
      console.log(this.state);
    return (
    <ScrollView
        style={styles}
    >
        {/*//Put the state,call the function renderAlbums*/}
        {this.renderAlbums()}
    </ScrollView>
    )
  }
}

export default AlbumList;