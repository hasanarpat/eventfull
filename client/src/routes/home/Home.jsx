import AnnouncementCarousel from '../../components/announcement/AnnouncementCarousel';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.hero}>
            <div className={styles.bgOpacity} />
            <div className={styles.texts}>
              <div className={styles.top}>
                <h1>
                  GET IN TOUCH WITH NEW PEOPLE AND CULTURE WITH FULL OF EVENTS
                  OF EVENTFULL
                </h1>
                <h3>
                  Ullamco labore laboris adipisicing qui tempor magna id magna
                  dolor exercitation dolore mollit.
                </h3>
              </div>
              <div className={styles.bottom}>
                <div className={styles.buttons}>
                  <button>
                    <Link to='/events'>Explore Near Events</Link>
                  </button>
                  <button>
                    <Link to='/artists'>Explore New Artists</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.announcement}>
            <AnnouncementCarousel />
          </div>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
          <h1>Eventfull</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
