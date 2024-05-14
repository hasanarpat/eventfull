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
          <Search type='event' />
          <Tickets />
          <Popular />
          {/* Instead of datagrid use infinite scroll technique here */}
          <Datagrid />
        </div>
      </div>
    </section>
  );
};

export default Events;
