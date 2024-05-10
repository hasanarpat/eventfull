import styles from './footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.innerWrapper}>
            <div>
              <h4>Events</h4>
              <ul>
                <li>Find Near Events</li>
                <li>Incoming Events</li>
                <li>Get Notifications</li>
              </ul>
            </div>
            <div>
              <h4>Artists</h4>
              <ul>
                <li>Popular Artists</li>
                <li>Rising Artists</li>
                <li></li>
              </ul>
            </div>
            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>Career</li>
                <li>Blog</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4>Privacy</h4>
              <ul>
                <li>Help</li>
                <li>Delete Account</li>
                <li>Copyright</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <Link to='/'>
            <img src='/assets/logo-dark.jpg' alt='' />
          </Link>
          <span>
            All rights are reserved. 2024{' '}
            <b>Eventfull Entertainment and Software Inc</b>. ©
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
