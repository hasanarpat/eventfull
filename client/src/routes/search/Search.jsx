import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './search.module.css';
import Events from '../../components/event/events/Events';
import Artists from '../../components/artists/Artists';
import Arenas from '../../components/arenas/Arenas';
import Users from '../../components/users/Users';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <section className={styles.search}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {query === null ? (
            <div className={styles.upsEmpty}>
              <img
                src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-ds-low-polygon-palm-tree-on-lonely-island-in-the-ocean-png-image_13002658.png'
                alt=''
              />
              <p>Ups Empty</p>
              <p>
                Looks like you did not provide any query, please go back and use
                our searchbars to see what you are looking for.
              </p>
              <button onClick={handleGoBack}>Go Home</button>
            </div>
          ) : (
            <section className={styles.searchResults}>
              <div className={styles.filterSection}>
                <form action=''>
                  <div className={styles.filterHeading}>
                    <span>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 16 16'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M6 9.5C6.93191 9.5 7.71496 10.1374 7.93699 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7455 13.8231 11.9496 13.5899 11.9919L13.5 12L7.93673 12.001C7.71435 12.8631 6.93155 13.5 6 13.5C5.06845 13.5 4.28565 12.8631 4.06327 12.001L2.5 12C2.22386 12 2 11.7761 2 11.5C2 11.2545 2.17688 11.0504 2.41012 11.0081L2.5 11H4.06301C4.28504 10.1374 5.06809 9.5 6 9.5ZM6 10.5C5.44772 10.5 5 10.9477 5 11.5C5 12.0523 5.44772 12.5 6 12.5C6.55228 12.5 7 12.0523 7 11.5C7 10.9477 6.55228 10.5 6 10.5ZM10 2.5C10.9319 2.5 11.715 3.13738 11.937 3.99998L13.5 4C13.7761 4 14 4.22386 14 4.5C14 4.74546 13.8231 4.94961 13.5899 4.99194L13.5 5L11.9367 5.00102C11.7144 5.86312 10.9316 6.5 10 6.5C9.06845 6.5 8.28565 5.86312 8.06327 5.00102L2.5 5C2.22386 5 2 4.77614 2 4.5C2 4.25454 2.17688 4.05039 2.41012 4.00806L2.5 4L8.06301 3.99998C8.28504 3.13738 9.06809 2.5 10 2.5ZM10 3.5C9.44772 3.5 9 3.94772 9 4.5C9 5.05228 9.44772 5.5 10 5.5C10.5523 5.5 11 5.05228 11 4.5C11 3.94772 10.5523 3.5 10 3.5Z'></path>
                      </svg>
                    </span>
                    <span>Filter By</span>
                  </div>
                  <label htmlFor='date'>Date</label>
                  <select name='date' id='date'>
                    <option value='default'>Default</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                  </select>
                  <label htmlFor='price'>Price</label>
                  <select name='price' id='price'>
                    <option value='default'>Default</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                  </select>
                  <label htmlFor='country'>Country</label>
                  <select name='country' id='country'>
                    <option value='default'>Default</option>
                    <option value='america'>America</option>
                    <option value='europe'>Europe</option>
                    <option value='asia'>Asia</option>
                    <option value='other'>Other</option>
                  </select>
                  <label htmlFor='city'>City</label>
                  <select name='city' id='city'>
                    <option value='default'>Default</option>
                    <option value='london'>London</option>
                    <option value='paris'>Paris</option>
                    <option value='madrid'>Madrid</option>
                    <option value='Hamburg'>Hamburg</option>
                  </select>
                  <label htmlFor='category'>Category</label>
                  <select name='category' id='category'>
                    <option value='default'>Default</option>
                    <option value='music'>Music</option>
                    <option value='health'>Health</option>
                    <option value='business'>Business</option>
                    <option value='hobbies'>Hobbies</option>
                    <option value='sports'>Sports</option>
                    <option value='food'>Food</option>
                  </select>
                </form>
                <div className={styles.filteredObjects}>
                  <ul>
                    <li>
                      <button>
                        <span>Price Ascending</span>
                        <span>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            height='1.25em'
                            width='1.25em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'></path>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li>
                      <button>
                        <span>Price Ascending</span>
                        <span>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            height='1.25em'
                            width='1.25em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'></path>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li>
                      <button>
                        <span>Price Ascending</span>
                        <span>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            height='1.25em'
                            width='1.25em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'></path>
                          </svg>
                        </span>
                      </button>
                    </li>
                    <li>
                      <button>
                        <span>Price Ascending</span>
                        <span>
                          <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 512 512'
                            height='1.25em'
                            width='1.25em'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'></path>
                          </svg>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <hr />
                <div className={styles.resultTypes}>
                  <ul>
                    <li>
                      <Link to={``} className={styles.typeQueryLink}>
                        <button
                          data-target='selected'
                          className={styles.typeButton}
                        >
                          Events
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to={``} className={styles.typeQueryLink}>
                        <button className={styles.typeButton}>Artists</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={``} className={styles.typeQueryLink}>
                        <button className={styles.typeButton}>Arenas</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={``} className={styles.typeQueryLink}>
                        <button className={styles.typeButton}>Users</button>
                      </Link>
                    </li>
                    <li>
                      <Link to={``} className={styles.typeQueryLink}>
                        <button className={styles.typeButton}>All</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <h3>Events</h3>
              <div className={styles.events}>
                <Events />
              </div>
              <h3>Artists</h3>
              <div className={styles.artist}>
                <Artists />
              </div>
              <h3>Arenas</h3>
              <div className={styles.arenas}>
                <Arenas />
              </div>
              <h3>Users</h3>
              <div className={styles.users}>
                <Users />
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
