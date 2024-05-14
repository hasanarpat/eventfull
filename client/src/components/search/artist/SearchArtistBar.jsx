import styles from './searchArtistBar.module.css';
import Suggestions from '../../suggestions/Suggestions';

const SearchArtistBar = ({ showSuggestions, setShowSuggestions }) => {
  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.searchArtistBar}>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search for Artists'
          name='input'
          id='input'
        />
        <button style={{ visibility: 'hidden', width: '0px', height: '0px' }}>
          Search
        </button>
      </form>
      <Suggestions
        showSuggestions={showSuggestions}
        setShowSuggestions={setShowSuggestions}
      />
    </section>
  );
};

export default SearchArtistBar;
