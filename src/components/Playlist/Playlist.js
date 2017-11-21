import React, {Component} from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList';

export class PlayList extends Component {
  constructor(props) {
    super(props);
    // Binds methods to the proper 'this'
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  // Return value from an event target and update the name state
  handleNameChange(event) {
    this.props.onNameChange(event.target.value);
  }
  // Renders the Playlist Component and pass props to <TrackList />
  render() {
    return (
      <div className="Playlist">
        <input value={this.props.name} onChange={this.handleNameChange} />
        <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} />
        <a className="Playlist-save" onClick={this.props.onSave}>
          SAVE TO SPOTIFY
        </a>
      </div>
    );
  }
}
