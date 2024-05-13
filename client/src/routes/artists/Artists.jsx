import Datagrid from '../../components/datagrid/Datagrid';
import Popular from '../../components/popular/Popular';
import Search from '../../components/search/Search';
import Tickets from '../../components/tickets/Tickets';
import styles from './artists.module.css';

const Artists = () => {
  return (
    <section className={styles.artists}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Search type='artist' />
          <Tickets />
          <Popular />
          <Datagrid />
        </div>
      </div>
    </section>
  );
};

export default Artists;
