import styles from './users.module.css';

const Users = () => {
  return (
    <section className={styles.users}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.search}>Search</div>
          </div>
          <div className={styles.bottom}>Bottom</div>
        </div>
      </div>
    </section>
  );
};

export default Users;
