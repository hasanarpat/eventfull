import { Link, useSearchParams } from 'react-router-dom';
import styles from './profile.module.css';
import EditEventCard from '../../components/event/editEventCard/EditEventCard';
import EventCard from '../../components/event/eventCard/EventCard';

const Profile = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <section className={styles.profile}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <aside className={styles.aside}>
            <ul>
              <li onClick={() => setSearchParams({ query: 'profile' })}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 448 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z'></path>
                </svg>
                <span>Profile</span>
              </li>
              <li onClick={() => setSearchParams({ query: 'events' })}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z'></path>
                </svg>{' '}
                <span>Events</span>
              </li>
              <li onClick={() => setSearchParams({ query: 'savedEvents' })}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path fill='none' d='M0 0h24v24H0z'></path>
                  <path d='M16.53 11.06 15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94zM19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z'></path>
                </svg>{' '}
                <span>Saved Events</span>
              </li>
              <li onClick={() => setSearchParams({ query: 'messages' })}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  version='1.2'
                  baseProfile='tiny'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M21 7h-3c0-1.65-1.35-3-3-3h-12c-1.65 0-3 1.35-3 3v7c0 1.65 1.35 3 3 3v3l3-3c0 1.65 1.35 3 3 3h8l3 3v-3h1c1.65 0 3-1.35 3-3v-7c0-1.65-1.35-3-3-3zm-18 8c-.542 0-1-.458-1-1v-7c0-.542.458-1 1-1h12c.542 0 1 .458 1 1v1h-6.5c-1.379 0-2.5 1.121-2.5 2.5v4.5h-4zm19 2c0 .542-.458 1-1 1h-12c-.542 0-1-.458-1-1v-6.5c0-.827.673-1.5 1.5-1.5h11.5c.542 0 1 .458 1 1v7z'></path>
                </svg>
                <span>Messages</span>
              </li>
              <li onClick={() => setSearchParams({ query: 'friends' })}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 640 512'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z'></path>
                </svg>
                <span>Friends</span>
              </li>
              <li onClick={() => setSearchParams({ query: 'settings' })}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M256 176a80 80 0 1 0 80 80 80.24 80.24 0 0 0-80-80zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66z'></path>
                </svg>
                <span>Settings</span>
              </li>
              <li>
                <svg
                  stroke='currentColor'
                  fill='none'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2'></path>
                  <path d='M15 12h-12l3 -3'></path>
                  <path d='M6 15l-3 -3'></path>
                </svg>
                <span>Logout</span>
              </li>
            </ul>
          </aside>
          <div className={styles.info}>
            <article className={styles.top}>
              <img
                src='https://images.pexels.com/photos/18023668/pexels-photo-18023668/free-photo-of-doga-yay-bahar-agac.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
                className={styles.bannerImg}
              />
              <section className={styles.profileDetails}>
                <div className={styles.left}>
                  <div className={styles.img}>
                    <img
                      src='https://images.pexels.com/photos/18023668/pexels-photo-18023668/free-photo-of-doga-yay-bahar-agac.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt=''
                    />
                  </div>
                  <div className={styles.leftInfo}>
                    <h4>John Doe</h4>
                    <p>Joined July 2024</p>
                    <div className={styles.followers}>
                      <span>0 Followers / 0 Follower</span>
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <Link to='/profileUpdate'>
                    <button>Edit Profile</button>
                  </Link>
                </div>
              </section>
            </article>
            <article className={styles.bottom}>
              <div
                className={styles.profileContent}
                style={
                  query === null || query === 'profile'
                    ? {
                        display: 'flex',
                      }
                    : {
                        display: 'none',
                      }
                }
              >
                <div className={styles.friends}>
                  <ul>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <button>Message</button>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className={styles.createEvent}>
                  <button>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='32'
                        d='M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48'
                      ></path>
                      <path d='M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z'></path>
                    </svg>
                    <span>Create New Event</span>
                  </button>
                </div>
              </div>
              <div
                className={styles.eventsContent}
                style={
                  query === 'events'
                    ? {
                        display: 'flex',
                      }
                    : {
                        display: 'none',
                      }
                }
              >
                <div className={styles.userEvents}>
                  <EditEventCard />
                  <EditEventCard />
                  <EditEventCard />
                  <EditEventCard />
                  <EditEventCard />
                  <EditEventCard />
                  <EditEventCard />
                  <EditEventCard />
                </div>
                <button className={styles.loadMore}>See More</button>
              </div>
              <div
                className={styles.savedEventsContent}
                style={
                  query === 'savedEvents'
                    ? {
                        display: 'flex',
                      }
                    : {
                        display: 'none',
                      }
                }
              >
                <div className={styles.userEvents}>
                  <EventCard />
                  <EventCard />
                  <EventCard />
                  <EventCard />
                </div>
                <button className={styles.loadMore}>See More</button>
              </div>
              <div
                className={styles.messagesContent}
                style={
                  query === 'friends'
                    ? {
                        display: 'flex',
                      }
                    : {
                        display: 'none',
                      }
                }
              >
                <div className={styles.friends}>
                  <ul>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/user/blabla`}>
                        <div>
                          <span>Mahmut</span>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                        </div>
                        <div className={styles.button}>
                          <button>Message</button>
                          <button>Remove Friend</button>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={styles.messagesContent}
                style={
                  query === 'messages'
                    ? {
                        display: 'flex',
                      }
                    : {
                        display: 'none',
                      }
                }
              >
                <div className={styles.messages}>
                  <ul>
                    <li>
                      <Link to={`/messages/blabla`}>
                        <div className={styles.userInfo}>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                          <span>Mahmut</span>
                        </div>
                        <div className={styles.lastMessage}>
                          <span>20:27, Thu</span>
                          <p>
                            Last message from friend Consequat magna cillum
                            minim id occaecat mollit sit ex sint amet. Est nulla
                            commodo voluptate sint mollit sit officia fugiat ex
                            sunt eiusmod proident magna quis. Id culpa
                            incididunt dolor ut.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/messages/blabla`}>
                        <div className={styles.userInfo}>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                          <span>Mahmut</span>
                        </div>
                        <div className={styles.lastMessage}>
                          <span>20:27, Thu</span>
                          <p>
                            Last message from friend Consequat magna cillum
                            minim id occaecat mollit sit ex sint amet. Est nulla
                            commodo voluptate sint mollit sit officia fugiat ex
                            sunt eiusmod proident magna quis. Id culpa
                            incididunt dolor ut.
                          </p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/messages/blabla`}>
                        <div className={styles.userInfo}>
                          <img
                            src='https://images.pexels.com/photos/18208718/pexels-photo-18208718/free-photo-of-kadin-ayakta-portre-modu-portre.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                            alt=''
                          />
                          <span>Mahmut</span>
                        </div>
                        <div className={styles.lastMessage}>
                          <span>20:27, Thu</span>
                          <p>
                            Last message from friend Consequat magna cillum
                            minim id occaecat mollit sit ex sint amet. Est nulla
                            commodo voluptate sint mollit sit officia fugiat ex
                            sunt eiusmod proident magna quis. Id culpa
                            incididunt dolor ut.
                          </p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={styles.settingsContent}
                style={
                  query === 'settings'
                    ? {
                        display: 'flex',
                      }
                    : {
                        display: 'none',
                      }
                }
              >
                Settings
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
