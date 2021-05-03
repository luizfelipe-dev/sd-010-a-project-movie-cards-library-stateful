import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import CheckBoxInput from './CheckBoxInput';
import SelectInput from './SelectInput';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;

    return (
      <form action="" data-testid="search-bar-form">
        <TextInput value={ searchText } onChange={ onSearchTextChange } />
        <CheckBoxInput checked={ bookmarkedOnly } onChange={ onBookmarkedChange } />
        <SelectInput value={ selectedGenre } onChange={ onSelectedGenreChange } />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
