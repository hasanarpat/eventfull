import { useEffect, useRef, useState } from 'react';
import styles from './announcementCarousel.module.css';

const AnnouncementCarousel = () => {
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(slideIndex, 'slideIndex');

      carouselRef.current.style.transform = `translateX(${-slideIndex * 25}%)`;
    }, 1000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((prev) => (prev <= 0 ? 0 : prev - 1));
    } else if (direction === 'right') {
      setSlideIndex((prev) => (prev >= 3 ? 0 : prev + 1));
    }
  };

  return (
    <div className={styles.announcementCarousel}>
      <div className={styles.container}>
        <span onClick={() => handleClick('left')} className={styles.arrowLeft}>
          prev
        </span>
        <span
          onClick={() => handleClick('right')}
          className={styles.arrowRight}
        >
          next
        </span>
        <div className={styles.wrapper} ref={carouselRef}>
          <div
            className={styles.carouselItem}
            style={{ backgroundColor: 'red' }}
          >
            1
          </div>
          <div
            className={styles.carouselItem}
            style={{ backgroundColor: 'blue' }}
          >
            2
          </div>
          <div
            className={styles.carouselItem}
            style={{ backgroundColor: 'green' }}
          >
            3
          </div>
          <div
            className={styles.carouselItem}
            style={{ backgroundColor: 'hotpink' }}
          >
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCarousel;
