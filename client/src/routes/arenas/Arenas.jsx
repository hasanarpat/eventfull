import { Link } from 'react-router-dom';
import Search from '../../components/search/Search';
import styles from './arenas.module.css';

const Arenas = () => {
  return (
    <section className={styles.arenas}>
      <div className={styles.arenasContainer}>
        <div className={styles.arenasWrapper}>
          <div className={styles.topContent}>
            <div className={styles.cards}>
              <Link to={`/`} className={styles.card}>
                <h2 className={styles.cardTitle}>Card One</h2>
                <p className={styles.cardDate}>May 25, 2021</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </Link>
              <Link to={`/`} className={styles.card}>
                <h2 className={styles.cardTitle}>Card One</h2>
                <p className={styles.cardDate}>May 25, 2021</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </Link>
              <Link to={`/`} className={styles.card}>
                <h2 className={styles.cardTitle}>Card One</h2>
                <p className={styles.cardDate}>May 25, 2021</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </Link>
              <Link to={`/`} className={styles.card}>
                <h2 className={styles.cardTitle}>Card One</h2>
                <p className={styles.cardDate}>May 25, 2021</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </Link>
              <Link to={`/`} className={styles.card}>
                <h2 className={styles.cardTitle}>Card One</h2>
                <p className={styles.cardDate}>May 25, 2021</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </Link>
              <Link to={`/`} className={styles.card}>
                <h2 className={styles.cardTitle}>Card One</h2>
                <p className={styles.cardDate}>May 25, 2021</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores alias ut veniam?
                </p>
              </Link>
            </div>
          </div>
          <div className={styles.searchBar}>
            <Search type='arena' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arenas;
