import React, { Component } from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
  import {PlayList} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

// Get access token
Spotify.getAccessToken();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'My Playlist',
      playlistTracks: []
    }
    // Bound all the methods to this.
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }
  // If the track is not already in the playlist, add it
  addTrack(track) {
    if (!this.state.playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      this.setState(prevState => ({
        playlistTracks: [...prevState.playlistTracks, track]
      }));
    }
  }
  // Finds a track by the id and removes it from the playlistTracks array
  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(
      playlistTrack => playlistTrack.id !== track.id)
    });
  }
  // Sets the state of playlistName to a new value
  updatePlaylistName(name){
    this.setState({playlistName: name});
  }
  // Saves a playlist to Spotify
  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris);
    // Once the playlist is saved sets the state back to empty
    this.setState({
      playlistName: "My New Playlist",
      searchResults: [],
      playlistTracks: []
    });
  }
  // Searches for tracks using the Spotify API
  search(term) {
    Spotify.search(term)
      .then(searchResults => this.setState({
        searchResults: searchResults
      }));
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing with Darth Awesome</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
            onAdd={this.addTrack}/>
            <PlayList name={this.state.playlistName}
            tracks={this.state.playlistTracks} onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
