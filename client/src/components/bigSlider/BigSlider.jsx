import { useEffect, useRef, useState } from 'react';
import styles from './bigSlider.module.css';

const BigSlider = ({ setShowGallery }) => {
  const sliderRef = useRef(null);

  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `
      translateX(${-slideIndex * 100}svw)
      `;
    }
  }, [slideIndex]);

  return (
    <div className={styles.bigSlider}>
      <div className={styles.galleryWrapper}>
        <div className={styles.slider}>
          <span
            onClick={() => setSlideIndex((prev) => (prev <= 0 ? 2 : prev - 1))}
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 448 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'></path>
            </svg>
          </span>
          <span
            onClick={() => setSlideIndex((prev) => (prev >= 2 ? 0 : prev + 1))}
          >
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 448 512'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z'></path>
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
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 512 512'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z'></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BigSlider;
