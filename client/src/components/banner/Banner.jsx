import styles from './banner.module.css';

const Banner = ({ img, title, date }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <img src={img} alt='disco party on may' className={styles.bannerImg} />
        <div className={styles.bannerInfo}>
          <div className={styles.texts}>
            <h4>{title}</h4>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
