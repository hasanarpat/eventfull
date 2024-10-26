import { Link } from 'react-router-dom';
import styles from './suggestions.module.css';

const Suggestions = ({ showSuggestions, setShowSuggestions }) => {
  return (
    <article
      className={styles.suggestions}
      // onMouseLeave={() => setShowSuggestions(false)}
      style={showSuggestions ? { display: 'block' } : { display: 'none' }}
    >
      <div className={styles.suggestion}>
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
  );
};

export default Suggestions;
