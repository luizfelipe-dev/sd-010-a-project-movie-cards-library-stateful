import React from 'react';

class SearchBar extends React.Component {
  render() {
    // const {
    //   searchText,
    //   onSearchTextChange,
    //   bookmarkedOnly,
    //   onBookmarkedChange,
    //   selectedGenre,
    //   onSelectedGenreChange,
    // } = this.props;
    return (
      <div className="search-bar">
        <form data-testid="search-bar-form">
          <label htmlFor="search-input">
            Inclui o texto
            <input id="search-input" />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
