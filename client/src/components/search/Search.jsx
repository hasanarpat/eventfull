// * SPECIFY SEARCH COMPONENTS FOR MODELS (ARTIST,ETC.)
// * GIVE GENERAL STYLE ON HERE BUT LET THE NECESSARY PROPERTIES FOR MODEL SEARCH IS BUILDED ON COMPONENT ITSELF OR MODIFY INHERITED STYLES AND ATTRIBUTES

import styles from './search.module.css';
import SearchUserBar from './user/SearchUserBar';
import SearchArtistBar from './artist/SearchArtistBar';
import SearchEventBar from './event/SearchEventBar';
import SearchArenaBar from './arena/SearchArenaBar';
import SearchDefaultBar from './default/SearchDefaultBar';
import { useState } from 'react';
import Filter from '../filter/Filter';

const Search = ({ type }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  let searchComponentToReturn;

  switch (type) {
    case 'artist':
      searchComponentToReturn = (
        <SearchArtistBar
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />
      );
      break;
    case 'arena':
      searchComponentToReturn = (
        <SearchArenaBar
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />
      );
      break;
    case 'event':
      searchComponentToReturn = (
        <SearchEventBar
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />
      );
      break;
    case 'user':
      searchComponentToReturn = (
        <SearchUserBar
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />
      );
      break;

    default:
      searchComponentToReturn = (
        <SearchDefaultBar
          showSuggestions={showSuggestions}
          setShowSuggestions={setShowSuggestions}
        />
      );
      break;
  }

  return (
    <div
      className={styles.searchBar}
      onFocus={() => setShowSuggestions(true)}
      onBlur={()=>setShowSuggestions(false)}
      // onBlur={() => setShowSuggestions(false)}
    >
      <div className={styles.searchBarLayout}>
        {/* {type != 'user' && (
          <div className={styles.filter}>
            <Filter type={type} />
          </div>
        )} */}
        {searchComponentToReturn}
      </div>
    </div>
  );
};

export default Search;
