import styles from './events.module.css';
import Search from '../../components/search/Search';
import Tickets from '../../components/tickets/Tickets';
import UpComingEvents from '../../components/upComingEvents/UpComingEvents';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <section className={styles.events}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Search type='event' />
          <Tickets />
          <p className={styles.upcomingTitle}>Upcoming Events</p>
          <UpComingEvents />
          {/* Instead of datagrid use infinite scroll technique here */}
          <div className={styles.infinite}>
            <div className={styles.infiniteWrapper}>
              <div className={styles.infiniteItem}>
                <div className={styles.infiniteItemLeft}>
                  <div className={styles.date}>
                    <span>DEC</span>
                    <span>4</span>
                  </div>
                </div>
                <div className={styles.infiniteItemRight}>
                  <Link to={`/blabla`} className={styles.infiniteItemRight}>
                    <div>
                      <h4>Voice of darkness</h4>
                      <div className={styles.location}>
                        <span>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 384 512'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'></path>
                          </svg>
                        </span>
                        <span>Hebron, KY</span>
                      </div>
                    </div>
                    <div>
                      <span>Dec 4, 2024</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className={styles.infiniteItem}>
                <div className={styles.infiniteItemLeft}>
                  <div className={styles.date}>
                    <span>DEC</span>
                    <span>4</span>
                  </div>
                </div>
                <div className={styles.infiniteItemRight}>
                  <Link to={`/blabla`} className={styles.infiniteItemRight}>
                    <div>
                      <h4>Voice of darkness</h4>
                      <div className={styles.location}>
                        <span>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 384 512'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'></path>
                          </svg>
                        </span>
                        <span>Hebron, KY</span>
                      </div>
                    </div>
                    <div>
                      <span>Dec 4, 2024</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className={styles.infiniteItem}>
                <div className={styles.infiniteItemLeft}>
                  <div className={styles.date}>
                    <span>DEC</span>
                    <span>4</span>
                  </div>
                </div>
                <div className={styles.infiniteItemRight}>
                  <Link to={`/blabla`} className={styles.infiniteItemRight}>
                    <div>
                      <h4>Voice of darkness</h4>
                      <div className={styles.location}>
                        <span>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 384 512'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z'></path>
                          </svg>
                        </span>
                        <span>Hebron, KY</span>
                      </div>
                    </div>
                    <div>
                      <span>Dec 4, 2024</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
