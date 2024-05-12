import Search from '../../components/search/Search';
import styles from './arenas.module.css';
import Tickets from '../../components/tickets/Tickets';

const Arenas = () => {
  return (
    <section className={styles.arenas}>
      <div className={styles.arenasContainer}>
        <div className={styles.arenasWrapper}>
          <div className={styles.searchBar}>
            <Search type='arena' />
          </div>
          <div className={styles.topContent}>
            <Tickets />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Arenas;
