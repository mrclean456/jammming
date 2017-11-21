import React, {Component} from 'react';
import './SearchResults.css';
import {TrackList} from '../TrackList/TrackList';

export class SearchResults extends Component {
  // Render the component an pass props to <Tracklist />
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults}
        onAdd={this.props.onAdd} />
      </div>
    );
  }
}
