import React, { Component } from 'react';
import { SafeAreaView, AppRegistry, View } from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';


 class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:'white' }}> 
        <Header 
          header={'Albums'}
        />
        <AlbumList />
      </SafeAreaView>
    )
  }
}

export default App;

AppRegistry.registerComponent('albums', () => App);
