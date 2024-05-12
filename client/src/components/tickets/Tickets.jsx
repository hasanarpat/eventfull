import { Link } from 'react-router-dom';
import styles from './tickets.module.css';

const Tickets = () => {
  return (
    <div className={styles.cards}>
      <Link
        to={`/`}
        className={styles.card}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586972246803-d2bdc4006378?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h2 className={styles.cardTitle}>Card One</h2>
        <p className={styles.cardDate}>May 25, 2021</p>
        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias
          ut veniam?
        </p>
      </Link>
      <Link to={`/`} className={styles.card}>
        <h2 className={styles.cardTitle}>Card One</h2>
        <p className={styles.cardDate}>May 25, 2021</p>
        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias
          ut veniam?
        </p>
      </Link>
      <Link
        to={`/`}
        className={styles.card}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h2 className={styles.cardTitle}>Card One</h2>
        <p className={styles.cardDate}>May 25, 2021</p>
        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias
          ut veniam?
        </p>
      </Link>
      <Link to={`/`} className={styles.card}>
        <h2 className={styles.cardTitle}>Card One</h2>
        <p className={styles.cardDate}>May 25, 2021</p>
        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias
          ut veniam?
        </p>
      </Link>
      <Link
        to={`/`}
        className={styles.card}
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h2 className={styles.cardTitle}>Card One</h2>
        <p className={styles.cardDate}>May 25, 2021</p>
        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias
          ut veniam?
        </p>
      </Link>
      <Link to={`/`} className={styles.card}>
        <h2 className={styles.cardTitle}>Card One</h2>
        <p className={styles.cardDate}>May 25, 2021</p>
        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias
          ut veniam?
        </p>
      </Link>
    </div>
  );
};

export default Tickets;
