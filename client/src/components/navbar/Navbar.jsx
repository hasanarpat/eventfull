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
                <Link to='/search'>Search</Link>
              </li>
              {currentUser && (
                <li>
                  <Link to='/profile'>Profile 👤</Link>
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
          <div className={styles.hamburgerStick} id={openMenu && 'stick1'} />
          <div className={styles.hamburgerStick} id={openMenu && 'stick2'} />
          <div className={styles.hamburgerStick} id={openMenu && 'stick3'} />
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
                <Link to='/profile'>Profile 👤</Link>
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
