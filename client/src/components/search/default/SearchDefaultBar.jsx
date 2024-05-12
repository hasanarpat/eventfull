// * - DEFAULT SEARCHBAR COMPONENT
// * - USER CAN SEARCH FOR ANYTHING (EVENT,ARTIST,ARENA,USER) AND SEE SUGGESTIONS OR ENTER TO SEE ALL RESULTS
// TODO - TO SHOW SUGGESTIONS CREATE AN ABSOLUTE DIV AFTER SEARCHBAR
// TODO - FETCH ALL MODELS(ARTIST, ETC.) FOR RESULTS AND CATEGORIZE THEM UNDER HEADINGS(ARTIST,ETC.)

import { Link } from 'react-router-dom';
import styles from './searchDefaultBar.module.css';

const SearchDefaultBar = ({ showSuggestions, setShowSuggestions }) => {
  const handleSearch = async (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.searchDefaultBar}>
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
      <article
        className={styles.suggestions}
        onMouseLeave={() => setShowSuggestions(false)}
        style={showSuggestions ? { display: 'block' } : { display: 'none' }}
      >
        <div className={styles.suggestion}>
          <h4>Events</h4>
          <div className={styles.suggestionItems}>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <div className={styles.seeMore}>
              <Link to={`/blabla`}>See More</Link>
            </div>
          </div>
        </div>{' '}
        <div className={styles.suggestion}>
          <h4>Artists</h4>
          <div className={styles.suggestionItems}>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <div className={styles.seeMore}>
              <Link to={`/blabla`}>See More</Link>
            </div>
          </div>
        </div>{' '}
        <div className={styles.suggestion}>
          <h4>Arenas</h4>
          <div className={styles.suggestionItems}>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <div className={styles.seeMore}>
              <Link to={`/blabla`}>See More</Link>
            </div>
          </div>
        </div>
        <div className={styles.suggestion}>
          <h4>Users</h4>
          <div className={styles.suggestionItems}>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <Link to={`/blabla`} className={styles.suggestionItem}>
              <div className={styles.suggestionItemReference}>
                <img
                  src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='arena rock fest'
                  className={styles.itemImg}
                />
                <h5>Arena Rock Fest</h5>
              </div>
              <span>May 15 2024</span>
            </Link>
            <div className={styles.seeMore}>
              <Link to={`/blabla`}>See More</Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SearchDefaultBar;
