import styles from './singleArtist.module.css';
import BigSlider from '../../components/bigSlider/BigSlider';
import { useState } from 'react';

const SingleArtist = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section className={styles.singleArtist}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <img
              src='https://images.unsplash.com/photo-1555089957-ce59fc3bce21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='arena img'
              className={styles.mainImage}
            />
            <div className={styles.smallImages}>
              <img
                src='https://images.unsplash.com/photo-1555089957-ce59fc3bce21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='arena img'
              />
              <img
                src='https://images.unsplash.com/photo-1555089957-ce59fc3bce21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='arena img'
              />
              <div
                className={styles.seeMore}
                onClick={() => setShowGallery(true)}
              >
                See more photos...
              </div>
            </div>
          </div>
          {showGallery && <BigSlider />}
          <div className={styles.center}></div>
          <div className={styles.bottom}></div>
        </div>
      </div>
    </section>
  );
};

export default SingleArtist;
