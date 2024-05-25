import { Link } from 'react-router-dom';
import styles from './login.module.css';

const login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <h2>
              Elit cillum consectetur proident dolor nostrud ea est enim fugiat
              cillum exercitation eu ad consequat.
            </h2>
            <p>
              Deserunt amet id sint quis non magna velit aliqua aliquip veniam
              culpa consequat sunt aliqua. Reprehenderit amet sunt sit non
              adipisicing ullamco excepteur consectetur sint magna nulla dolore
              cupidatat. Fugiat enim nisi labore esse sunt elit officia fugiat
              sint ad labore. Consectetur deserunt occaecat quis irure et enim.
              Nisi nostrud in aliquip reprehenderit sunt enim eu. Tempor Lorem
              duis officia duis. Duis amet incididunt enim proident aute.
            </p>
            <hr />
            <span>
              Magna ut ea aliqua magna cupidatat irure excepteur Lorem do do
              ullamco tempor.
            </span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.formItem}>
              <label htmlFor='username'>Username</label>
              <input type='text' name='username' id='username' />
            </div>
            <div className={styles.formItem}>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div className={styles.formItem}>
              <label htmlFor='password'>Password</label>
              <input type='password' name='password' id='password' />
            </div>
            <div className={styles.formItem}>
              <button type='submit'>Login</button>
            </div>
            <div className={styles.additional}>
              <hr style={{ borderTop: '2px solid gray' }} />
              <span>
                Don&apos;t you have an account?{' '}
                <Link to='/register' className={styles.signup}>
                  Sign Up
                </Link>
              </span>
              <hr style={{ borderTop: '2px solid gray' }} />
            </div>
            <span style={{ color: 'hotpink' }}>
              Something went wrong while signing in
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default login;
