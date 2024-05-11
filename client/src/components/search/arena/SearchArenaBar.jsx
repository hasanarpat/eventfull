import styles from './searchArenaBar.module.css';

const SearchArenaBar = () => {
  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.searchArenaBar}>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          placeholder='Search for Artists, Events, etc.'
          name='input'
          id='input'
        />
        <button style={{ visibility: 'hidden', width: '0px', height: '0px' }}>
          Search
        </button>
      </form>
      <div className={styles.suggestions}>asdad</div>
    </section>
  );
};

export default SearchArenaBar;
