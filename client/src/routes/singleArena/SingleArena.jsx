import { useEffect, useRef, useState } from 'react';
import styles from './singleArena.module.css';

const SingleArena = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `
    translateX(${-slideIndex * 33}%)
    `;
    }
  }, [slideIndex]);
  return (
    <section className={styles.singleArena}>
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
          {showGallery && (
            <div className={styles.gallery}>
              <div className={styles.galleryWrapper}>
                <div className={styles.slider}>
                  <span
                    onClick={() =>
                      setSlideIndex((prev) => (prev <= 0 ? 2 : prev - 1))
                    }
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z'></path>
                    </svg>
                  </span>
                  <span
                    onClick={() =>
                      setSlideIndex((prev) => (prev >= 2 ? 0 : prev + 1))
                    }
                  >
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path fill='none' d='M0 0h24v24H0z'></path>
                      <path d='M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z'></path>
                    </svg>
                  </span>
                  <div className={styles.sliderWrapper} ref={sliderRef}>
                    <img
                      src='https://images.unsplash.com/photo-1555089957-ce59fc3bce21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='arena img'
                    />
                    <img
                      src='https://images.unsplash.com/photo-1715616680818-43a4a55d4d17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='arena img'
                    />
                    <img
                      src='https://images.unsplash.com/photo-1715454969547-a69afff2a701?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='arena img'
                    />
                  </div>
                </div>
                <div
                  className={styles.galleryClose}
                  onClick={() => setShowGallery(false)}
                >
                  X
                </div>
              </div>
            </div>
          )}
          <div className={styles.center}>center</div>
          <div className={styles.bottom}>bottom</div>
        </div>
      </div>
    </section>
  );
};

export default SingleArena;
