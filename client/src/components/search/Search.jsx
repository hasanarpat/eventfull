// * SPECIFY SEARCH COMPONENTS FOR MODELS (ARTIST,ETC.)
// * GIVE GENERAL STYLE ON HERE BUT LET THE NECESSARY PROPERTIES FOR MODEL SEARCH IS BUILED ON COMPONENT ITSELF OR MODIFY INHERITED STYLES AND ATTRIBUTES

import styles from './search.module.css';
import SearchUserBar from './user/SearchUserBar';
import SearchArtistBar from './artist/SearchArtistBar';
import SearchEventBar from './event/SearchEventBar';
import SearchArenaBar from './arena/SearchArenaBar';
import SearchDefaultBar from './default/SearchDefaultBar';
import { useState } from 'react';

const Search = ({ type }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  let searchComponentToReturn;

  switch (type) {
    case 'artist':
      searchComponentToReturn = (
        <SearchArtistBar showSuggestions={showSuggestions} />
      );
      break;
    case 'arena':
      searchComponentToReturn = (
        <SearchArenaBar showSuggestions={showSuggestions} />
      );
      break;
    case 'event':
      searchComponentToReturn = (
        <SearchEventBar showSuggestions={showSuggestions} />
      );
      break;
    case 'user':
      searchComponentToReturn = (
        <SearchUserBar showSuggestions={showSuggestions} />
      );
      break;

    default:
      searchComponentToReturn = (
        <SearchDefaultBar showSuggestions={showSuggestions} />
      );
      break;
  }

  return (
    <div
      className={styles.searchBar}
      onFocus={() => setShowSuggestions(true)}
      onBlur={() => setShowSuggestions(false)}
    >
      <div className={styles.searchBarLayout}>{searchComponentToReturn}</div>
    </div>
  );
};

export default Search;
