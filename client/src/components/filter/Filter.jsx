import ArtistFilter from './artistFilter/ArtistFilter';
import ArenaFilter from './arenaFilter/ArenaFilter';
import EventFilter from './eventFilter/EventFilter';
import DefaultFilter from './defaultFilter/DefaultFilter';
import styles from './filter.module.css';

const Filter = ({ type }) => {
  let filterComponentToReturn;
  switch (type) {
    case 'artist':
      filterComponentToReturn = <ArtistFilter />;
      break;
    case 'arena':
      filterComponentToReturn = <ArenaFilter />;
      break;
    case 'event':
      filterComponentToReturn = <EventFilter />;
      break;

    default:
      filterComponentToReturn = <DefaultFilter />;
      break;
  }

  return <div className={styles.filter}>{filterComponentToReturn}</div>;
};

export default Filter;
