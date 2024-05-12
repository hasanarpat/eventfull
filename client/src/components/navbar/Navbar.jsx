import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Switch from '../switch/Switch';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  let { currentUser } = useContext(AuthContext);
  currentUser = true;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link to='/'>
            <img src='/assets/logo-dark.jpg' alt='logo' />
          </Link>
        </div>

        <div className={styles.center}>
          <div className={styles.list}>
            <ul>
              <li>
                <Link to='/events'>Events</Link>
              </li>
              <li>
                <Link to='/artists'>Artists</Link>
              </li>
              <li>
                <Link to='/arenas'>Arenas</Link>
              </li>
              <li>
                <Link to='/search'>Search</Link>
              </li>
              {currentUser && (
                <li>
                  <Link to='/profile'>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480z'></path>
                    </svg>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        {/* 
        <div className={styles.right}>
          <ul>
            <li>
              <Link to='/social'>
                <img src='/assets/social-icons/facebook.webp' alt='' />
              </Link>
            </li>
            <li>
              <Link to='/social'>
                <img src='/assets/social-icons/instagram.webp' alt='' />
              </Link>
            </li>
            <li>
              <Link to='/social'>
                <img src='/assets/social-icons/x.png' alt='' />
              </Link>
            </li>
            <li>
              <Link to='/social'>
                <img src='/assets/social-icons/pinterest.webp' alt='' />
              </Link>
            </li>
            <li>
              <Link to='/social'>
                <img src='/assets/social-icons/linkedin.webp' alt='' />
              </Link>
            </li>
          </ul>
        </div> */}

        <div
          className={styles.hamburger}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <div
            className={styles.hamburgerStick}
            id={openMenu ? 'stick1' : 'stick'}
          />
          <div
            className={styles.hamburgerStick}
            id={openMenu ? 'stick2' : 'stick'}
          />
          <div
            className={styles.hamburgerStick}
            id={openMenu ? 'stick3' : 'stick'}
          />
        </div>
        <div
          className={styles.mobileMenu}
          style={openMenu ? { display: 'block' } : { display: 'none' }}
        >
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/event'>Events</Link>
            </li>
            <li>
              <Link to='/artist'>Artists</Link>
            </li>
            <li>
              <Link to='/arena'>Arenas</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
            {currentUser && (
              <li>
                <Link to='/profile'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 512 512'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6zM432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480z'></path>
                  </svg>
                </Link>
              </li>
            )}
            <li>
              <Switch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
