import React from 'react'
import logo from './logo.svg';
import './App.css';
import Playlist from './components/playlist/playlist.js';
import SearchBar from './components/searchBar/searchBar.js';
import Results from './components/results/results.js';
import Spotify from './util/spotify_client_credentials.js';

//import Tracks from './util/get_tracks.js';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      searchResults : [],
      playlistName : 'playlist',
      playlistTracks : [
      {name:"a", artist:"a", album:"a", id:"a"},
      {name:"b", artist:"b", album:"b", id:"b"},
      {name:"", artist:"", album:"", id:""}
    ],
    };

    this.searchSpotify = this.searchSpotify.bind(this); //make sure that when using searchYelp, this commands inside will refer to 'App'
  };

  searchSpotify(searchTerm){
    Spotify.search(searchTerm)//.then(searchResults => {this.setState({searchResults : searchResults})})
    console.log('search state is',this.state.searchResults)
  }

  render(){
    return (

        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                      <SearchBar searchSpotify = {this.searchSpotify}/>
                <div className="App-playlist">
                {console.log('app',this.state.searchResults)}
                      <Results searchResults = {this.state.searchResults}/>
                      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>

                </div>
          </div>
        </div>
      );
    }
}


export default App;
