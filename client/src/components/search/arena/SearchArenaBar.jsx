import styles from './searchArenaBar.module.css';
import Suggestions from '../../suggestions/Suggestions';

const SearchArenaBar = ({ showSuggestions, setShowSuggestions }) => {
  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.searchArenaBar}>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search for Arenas'
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

export default SearchArenaBar;
