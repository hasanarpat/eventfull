import AnnouncementCarousel from '../../components/announcement/AnnouncementCarousel';
import Banner from '../../components/banner/Banner';
import Map from '../../components/map/Map';
import Search from '../../components/search/Search';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import { mapItems } from '../../data/mock-map';

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const location = formData.get('location');

    console.log(location);
  };
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

          <section className={styles.categories}>
            <div className={styles.filterSearch}>
              <form onSubmit={handleSubmit}>
                <span>Popular In</span>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'></path>
                </svg>
                <input
                  name='location'
                  type='text'
                  placeholder='San Francisco'
                />
              </form>
            </div>
            <div className={styles.catalog}>
              <div className={styles.catalogWrapper}>
                <Link to={`/search?categories=music`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z'></path>
                  </svg>
                  Music
                </Link>
                <Link to={`/search?categories=performing`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M147.9 25.75c-10.1 0-20.2 1.2-29.9 3.6-52 13-95.7 59.8-97.8 127.05-1.1 35.8 9.9 65.6 27.6 91.1 17.6 25.6 41.5 47.1 66.8 68.5C165.2 358.5 221 399.8 247 464.3l8.9 22 8.5-22.2C289 399.5 343 356.3 393 312.8c50-43.5 96.6-88.3 98.8-155.8 2.3-71.55-42.4-116.75-95.5-127.15-49-9.7-105.4 9.1-140.3 57.7-27.5-42.1-68.3-61.7-108.1-61.8zM80 112l80 32-64 32 116.4 23.3L256 112l43.6 87.3L416 176l-64-32 80-32 32 80-171.5 66L256 416l-36.5-158L48 192l32-80z'></path>
                  </svg>
                  Performing & Visual Arts
                </Link>
                <Link to={`/search?categories=holiday`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 384 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z'></path>
                  </svg>
                  Holiday
                </Link>
                <Link to={`/search?categories=health`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M196 16a30 30 0 0 0-30 30v120H46a30 30 0 0 0-30 30v120a30 30 0 0 0 30 30h120v120a30 30 0 0 0 30 30h120a30 30 0 0 0 30-30V346h120a30 30 0 0 0 30-30V196a30 30 0 0 0-30-30H346V46a30 30 0 0 0-30-30H196z'></path>
                  </svg>
                  Health
                </Link>
                <Link to={`/search?categories=hobbies`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M328.5 32.86l-11.2 2.46-24.6 110.98-62.1-48.6c-1.5 2.4-2.6 4.6-3 6.8-.9 3.7-.5 7.6 2.3 13l58.2 47.6-12.9 93.5-2.4 2.2c-57.5 53.5-130.5 102.9-198.52 153 9.71 2.4 18.73 6.9 25.22 14.3 7 7.8 9.9 18.3 10.1 28.7C226.7 353.3 375.8 223.5 473 114.2c2.2-8.5.9-10.9-1.3-13.4-1.4-1.73-4.4-3.63-7.7-5.83C427.2 131.7 362.8 196.9 316.8 229.4l-16.9 12zM292.4 374.9c-25.4 6.8-50 9.3-74.5 10.1-6.9 6.1-13.7 12.2-20.5 18.3 17.2 0 34.6-.5 52.4-2.4 11.8 23 33.9 36.3 53 49.5l10.2-14.8c-17.4-12-33.9-22.6-43.8-37.3 9.1-1.5 18.4-3.5 27.8-6zm-234.53 55c-8.44.2-15.64 3-18.86 6.9-1.35 1.7-1.73 5 .1 10.3 1.83 5.4 5.79 11.6 9.31 15.4 4.78 5.2 12.43 11.1 19.57 14.2 7.13 3 12.6 3.2 16.09.9 3.67-2.4 6.98-9.2 7.44-17.2.46-8.1-2.11-16.5-5.48-20.3-4.41-5-14.5-9.4-24.48-10.1-1.25-.1-2.48-.1-3.68-.1z'></path>
                  </svg>
                  Hobbies
                </Link>
                <Link to={`/search?categories=business`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 640 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z'></path>
                  </svg>
                  Business
                </Link>
                <Link to={`/search?categories=food`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M7.32297 2H4V0H8.67703L10.677 5H21V7H18.8824L18.0554 21.0587C18.0243 21.5873 17.5866 22 17.0571 22H6.9429C6.41343 22 5.97572 21.5873 5.94463 21.0587L5.11765 7H3V5H8.52297L7.32297 2ZM7.1211 7L7.29906 10.0252C9.97062 10.1354 11.2679 10.6301 12.36 11.067C13.4113 11.4875 14.28 11.8532 16.5867 11.9676L16.8789 7H7.1211Z'></path>
                  </svg>
                  Food & Drink
                </Link>
                <Link to={`/search?categories=sports`}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M193.69 152.84a16 16 0 0 1 29.64 2.56l36.4 121.36 30-59.92a16 16 0 0 1 28.62 0L345.89 272h96.76A213.08 213.08 0 0 0 464 176.65C463.37 114.54 413.54 64 352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65A211.13 211.13 0 0 0 56.93 240h93.18z'></path>
                    <path d='M321.69 295.16 304 259.78l-33.69 67.38A16 16 0 0 1 256 336q-.67 0-1.38-.06a16 16 0 0 1-14-11.34l-36.4-121.36-30 59.92A16 16 0 0 1 160 272H69.35q14 29.29 37.27 57.66c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81a316.79 316.79 0 0 0 19-25.66H336a16 16 0 0 1-14.31-8.84zM464 272h-21.35a260.11 260.11 0 0 1-18.25 32H464a16 16 0 0 0 0-32zM48 240a16 16 0 0 0 0 32h21.35a225.22 225.22 0 0 1-12.42-32z'></path>
                  </svg>
                  Sports & Fitness
                </Link>
              </div>
            </div>
          </section>
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
          <div className={styles.search}>
            <Search />
            {/* <Search type='artist' /> */}
            {/* <Search type='arena' /> */}
            {/* <Search type='event' /> */}
            {/* <Search type='user' /> */}
          </div>
          <section className={styles.rising}>
            <Link
              to='/event/blabla'
              className={styles.risingItem}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className={styles.hoverInfo}>
                <h2 className={styles.hoverInfoTitle}>
                  W.A.S.P OpenAir Concert - Arena Rock
                </h2>
                <div className={styles.hoverInfoDetails}>
                  <p>
                    Amet id voluptate cillum in eiusmod aute reprehenderit. Ut
                    cillum voluptate id ea in aute fugiat magna ut nulla
                    reprehenderit consequat culpa.
                  </p>
                  <span className={styles.detailInfoDate}>
                    <span>May</span> <span>12</span> <span>2024</span>
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to='/event/blabla'
              className={styles.risingItem}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1483821838526-8d9756a6e1ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')",
              }}
            >
              <div className={styles.hoverInfo}>
                <h2 className={styles.hoverInfoTitle}>
                  W.A.S.P OpenAir Concert - Arena Rock
                </h2>
                <div className={styles.hoverInfoDetails}>
                  <p>
                    Amet id voluptate cillum in eiusmod aute reprehenderit. Ut
                    cillum voluptate id ea in aute fugiat magna ut nulla
                    reprehenderit consequat culpa.
                  </p>
                  <span className={styles.detailInfoDate}>
                    <span>May</span> <span>12</span> <span>2024</span>
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to='/event/blabla'
              className={styles.risingItem}
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1586972246803-d2bdc4006378?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
              }}
            >
              <div className={styles.hoverInfo}>
                <h2 className={styles.hoverInfoTitle}>
                  W.A.S.P OpenAir Concert - Arena Rock
                </h2>
                <div className={styles.hoverInfoDetails}>
                  <p>
                    Amet id voluptate cillum in eiusmod aute reprehenderit. Ut
                    cillum voluptate id ea in aute fugiat magna ut nulla
                    reprehenderit consequat culpa.
                  </p>
                  <span className={styles.detailInfoDate}>
                    <span>May</span> <span>12</span> <span>2024</span>
                  </span>
                </div>
              </div>
            </Link>
          </section>
          <div className={styles.map}>
            <Map items={mapItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
