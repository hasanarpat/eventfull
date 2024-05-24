import styles from './singleEvent.module.css';
import Map from '../../components/map/Map';
import { mapItems } from '../../data/mock-map';
import { Link } from 'react-router-dom';

const SingleEvent = () => {
  return (
    <section className={styles.singleEvent}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.top}>
              <div className={styles.img}>
                <img
                  src='https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                />
              </div>
              <div className={styles.title}>
                <h3>Morning Yoga</h3>
                <div className={styles.day}>
                  <span>JUN</span>
                  <span>16</span>
                </div>
              </div>
              <div className={styles.session}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  role='img'
                  viewBox='0 0 24 24'
                  height='1.25em'
                  width='1.25em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m19.431 12.193-4.53-2.51h3.071a4.847 4.847 0 0 0 4.842-4.841A4.848 4.848 0 0 0 17.972 0H7.252a6.073 6.073 0 0 0-6.066 6.066 6.566 6.566 0 0 0 3.383 5.741l4.53 2.51H6.028a4.847 4.847 0 0 0-4.842 4.841A4.848 4.848 0 0 0 6.028 24h10.72a6.073 6.073 0 0 0 6.066-6.066 6.568 6.568 0 0 0-3.383-5.741zm-14.136-1.7a5.065 5.065 0 0 1-2.607-4.309C2.627 3.61 4.79 1.5 7.367 1.5h10.508c1.797 0 3.345 1.378 3.434 3.173a3.345 3.345 0 0 1-3.337 3.51H11.92a.67.67 0 0 0-.67.67l-.001 4.94zM16.633 22.5H6.124c-1.797 0-3.345-1.378-3.434-3.173a3.345 3.345 0 0 1 3.337-3.51h6.053c.37 0 .67-.3.67-.67v-4.94l5.954 3.3a5.065 5.065 0 0 1 2.608 4.309c.06 2.575-2.103 4.684-4.679 4.684'></path>
                </svg>
                <span>See other sessions *</span>
              </div>
              <div className={styles.info}>
                <div className={styles.date}>
                  <div className={styles.day}>
                    <span>JUN</span>
                    <span>16</span>
                  </div>
                  <div className={styles.dateDetails}>
                    <span>Friday, 16 June</span>
                    <span>14:00 to 15:00 GMT-4</span>
                  </div>
                </div>
                <div className={styles.location}>
                  <div className={styles.locationIcon}>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 1024 1024'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M515.664-.368C305.76-.368 128 178.4 128 390.176c0 221.76 206.032 448.544 344.624 607.936.528.64 22.929 25.52 50.528 25.52h2.449c27.6 0 49.84-24.88 50.399-25.52 130.064-149.52 320-396.048 320-607.936C896 178.4 757.344-.368 515.664-.368zm12.832 955.552c-1.12 1.12-2.753 2.369-4.193 3.409-1.472-1.008-3.072-2.288-4.255-3.408l-16.737-19.248C371.92 785.2 192 578.785 192 390.176c0-177.008 148.224-326.56 323.664-326.56 218.528 0 316.336 164 316.336 326.56 0 143.184-102.128 333.296-303.504 565.008zm-15.377-761.776c-106.032 0-192 85.968-192 192s85.968 192 192 192 192-85.968 192-192-85.968-192-192-192zm0 320c-70.576 0-129.473-58.816-129.473-129.408 0-70.576 57.424-128 128-128 70.624 0 128 57.424 128 128 .032 70.592-55.903 129.408-126.527 129.408z'></path>
                    </svg>
                  </div>
                  <div className={styles.addresses}>
                    <span>San Francisco</span>
                    <span>San Francisco, California</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className={styles.manager}>
                <span>You are a manager of this event.</span>
                <button>Manage event</button>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomFirst}>
                <div className={styles.desc}>
                  <p>
                    Qui fugiat labore ut irure ea id. Ut nisi labore deserunt
                    fugiat ipsum dolor dolore. Ipsum magna incididunt voluptate
                    duis cillum veniam officia irure sunt occaecat. Esse
                    incididunt nostrud cupidatat occaecat dolore cupidatat
                    consectetur et ex aliqua Lorem dolor exercitation dolore.
                    Enim duis et officia veniam officia. Consequat ullamco
                    mollit cupidatat deserunt ad ea incididunt eu adipisicing
                    elit reprehenderit.
                  </p>
                  <article>
                    <details>
                      <summary>Details</summary>
                      <p>
                        {' '}
                        Qui fugiat labore ut irure ea id. Ut nisi labore
                        deserunt fugiat ipsum dolor dolore. Ipsum magna
                        incididunt voluptate duis cillum veniam officia irure
                        sunt occaecat. Esse incididunt nostrud cupidatat
                        occaecat dolore cupidatat consectetur et ex aliqua Lorem
                        dolor exercitation dolore. Enim duis et officia veniam
                        officia. Consequat ullamco mollit cupidatat deserunt ad
                        ea incididunt eu adipisicing elit
                      </p>
                      reprehenderit.
                    </details>
                    <details>
                      <summary>Details</summary>
                      Something small enough to escape casual notice.
                    </details>
                    <details>
                      <summary>Details</summary>
                      Veniam reprehenderit dolor ex aute. Nisi velit nostrud
                      ullamco mollit anim aute Lorem incididunt cillum deserunt
                      sint commodo.
                      <input type='checkbox' />
                    </details>
                  </article>
                </div>
                <div className={styles.artist}>
                  <Link to={`/artist/blabla`}>
                    <img
                      src='https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt=''
                    />
                  </Link>

                  <Link to={`/artist/blabla`}>
                    <h3>Hayko Cepkin</h3>
                  </Link>
                  <div className={styles.rate}>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                </div>
              </div>
              <div className={styles.bottomSecond}>
                <div className={styles.registration}>
                  <p>Registration</p>
                  <hr />
                  <div className={styles.ticketCount}>
                    <form action=''>
                      <button>-</button>
                      <input type='number' min={0} max={10} defaultValue={1} />
                      <button>+</button>
                    </form>
                  </div>
                  <div className={styles.buttons}>
                    <button>Buy Now</button>
                    <button>Add To Cart</button>
                  </div>
                  <div className={styles.information}>
                    Taxes and fees are included to prices.
                  </div>
                  <div className={styles.information}>
                    Veniam reprehenderit dolor ex aute. Nisi velit nostrud
                    ullamco mollit anim aute Lorem incididunt cillum deserunt
                    sint commodo.
                    <input type='checkbox' />
                  </div>
                </div>
                <div className={styles.map}>
                  <Map items={[mapItems[3]]} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <img
              src='https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
            <span className={styles.heart}>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 512 512'
                height='2.5em'
                width='2.5em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z'></path>
              </svg>
            </span>
            <span className={styles.badge}>Add To Favorites</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleEvent;
