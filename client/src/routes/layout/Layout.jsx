import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import styles from './layout.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Footer from '../../components/footer/Footer';

const Layout = () => {
  return (
    <main className={styles.layout}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
};

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? (
    <Navigate to='/login' />
  ) : (
    <main className={styles.layout}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
};

export { Layout, RequireAuth };
