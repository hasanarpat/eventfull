import AnnouncementCarousel from '../../components/announcement/AnnouncementCarousel';
import Banner from '../../components/banner/Banner';
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
          <div className={styles.banner}>
            <Banner
              img='https://images.unsplash.com/photo-1586972246803-d2bdc4006378?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              title='Disco Party On May Has Come'
              date='May 18, Istanbul - Galata'
            />
          </div>
          <div className={styles.banner}>
            <Banner
              img='https://images.unsplash.com/photo-1483821838526-8d9756a6e1ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D'
              title='Let The Music Play'
              date='May 22, Ankara - Cankaya'
            />
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
