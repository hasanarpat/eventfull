import Search from '../../components/search/Search';
import styles from './arenas.module.css';
import Tickets from '../../components/tickets/Tickets';
import Datagrid from '../../components/datagrid/Datagrid';
import Popular from '../../components/popular/Popular';

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
          <Popular />
          <Datagrid />
        </div>
      </div>
    </section>
  );
};

export default Arenas;
