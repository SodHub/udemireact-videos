import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component  {
    state = {videos: [], selectedVideo: null};


    componentDidMount () {
        this.onTermSubmit ('buildings')
    }

    onVideoSelect = video => {
        console.log('hello from the app', video);
        this.setState({selectedVideo: video});
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

    this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
    });

    };

    render () {
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onFormSubmit = {this.onTermSubmit } />
            I have {this.state.videos.length} videos.
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                         <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos} />
                    </div>
                </div>
            </div>
        </div>
       );
    }
}

export default App;