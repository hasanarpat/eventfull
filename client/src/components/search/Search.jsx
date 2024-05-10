import styles from './search.module.css';
import SearchUserBar from './user/SearchUserBar';
import SearchArtistBar from './artist/SearchArtistBar';
import SearchEventBar from './event/SearchEventBar';
import SearchArenaBar from './arena/SearchArenaBar';
import SearchDefaultBar from './default/SearchDefaultBar';

const Search = ({ type }) => {
  let searchComponentToReturn;
  switch (type) {
    case 'artist':
      searchComponentToReturn = <SearchArtistBar />;
      break;
    case 'arena':
      searchComponentToReturn = <SearchArenaBar />;
      break;
    case 'event':
      searchComponentToReturn = <SearchEventBar />;
      break;
    case 'user':
      searchComponentToReturn = <SearchUserBar />;
      break;

    default:
      searchComponentToReturn = <SearchDefaultBar />;
      break;
  }
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBarLayout}>{searchComponentToReturn}</div>
    </div>
  );
};

export default Search;
