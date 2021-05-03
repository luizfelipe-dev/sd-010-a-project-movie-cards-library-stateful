import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={
            (event) => this.setState({ searchText: event.target.value })
          }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={
            (event) => this.setState({ bookmarkedOnly: event.target.value })
          }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={
            (event) => this.setState({ selectedGenre: event.target.value })
          }
        />
        <MovieList movies={ movies } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
