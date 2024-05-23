import styles from './singleEvent.module.css';

const SingleEvent = () => {
  return (
    <section className={styles.singleEvent}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.top}></div>
            <div className={styles.bottom}></div>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </section>
  );
};

export default SingleEvent;
