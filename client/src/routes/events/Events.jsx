import styles from './events.module.css';
import Datagrid from '../../components/datagrid/Datagrid';
import Popular from '../../components/popular/Popular';
import Search from '../../components/search/Search';
import Tickets from '../../components/tickets/Tickets';

const Events = () => {
  return (
    <section className={styles.events}>
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

export default Events;
