import Suggestions from '../../suggestions/Suggestions';
import styles from './searchEventBar.module.css';

const SearchEventBar = ({ showSuggestions, setShowSuggestions }) => {
  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.searchEventBar}>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search for Events'
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

export default SearchEventBar;
