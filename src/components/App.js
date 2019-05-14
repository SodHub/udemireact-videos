import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component  {
    state = {videos: [], selectedVideo: null};

    onVideoSelect = video => {
        console.log('hello from the app', video);
    }

    onTermSubmit =  async  term => {
    const response =  await axios.get('https://www.googleapis.com/youtube/v3/search',
           {
              params: {
                  q: term,
                  part:'snippet',
                  maxResults: 25,
                  key: 'AIzaSyAbb2niP7uBZNuyEYrXjE5E3h1cPNSobdk'


              }
         });

    this.setState({videos: response.data.items});

    };

    render () {
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onFormSubmit = {this.onTermSubmit } />
            I have {this.state.videos.length} videos.
            <VideoList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos} />
        </div>
       );
    }
}

export default App;