import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    // Binds methods to the correct 'this'
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  // Search method passes term to onSearch method
  search(term) {
    this.props.onSearch(term);
  }
  // handleTermChange Method passes a value to the search method
  handleTermChange(event) {
    this.search(event.target.value);
  }
  // Render the SearchBar component
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
        onChange={this.handleTermChange} />
        <a>SEARCH</a>
      </div>
    );
  }
}
