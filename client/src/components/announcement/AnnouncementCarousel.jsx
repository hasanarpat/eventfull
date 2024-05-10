import { useEffect, useRef, useState } from 'react';
import styles from './announcementCarousel.module.css';
import { Link } from 'react-router-dom';

const AnnouncementCarousel = () => {
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.style.transform = `translateX(${-slideIndex * 25}%)`;
    }, 1000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((prev) => (prev <= 0 ? 3 : prev - 1));
    } else if (direction === 'right') {
      setSlideIndex((prev) => (prev >= 3 ? 0 : prev + 1));
    }
  };

  return (
    <div className={styles.announcementCarousel}>
      <div className={styles.container}>
        <span onClick={() => handleClick('left')} className={styles.arrowLeft}>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 16 16'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z'
            ></path>
          </svg>
        </span>
        <span
          onClick={() => handleClick('right')}
          className={styles.arrowRight}
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 16 16'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z'
            ></path>
          </svg>
        </span>
        <div className={styles.wrapper} ref={carouselRef}>
          <div className={styles.carouselItem}>
            <img
              src='https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='announcement'
            />
            <div className={styles.announcement}>
              <h2>Rock Fest</h2>
              <p>
                Esse aliquip id Lorem pariatur enim irure id aliquip excepteur.
                Sint culpa aliqua laborum Lorem dolore sunt commodo. Est do amet
                sunt sit fugiat.
              </p>
              <button>
                <Link to='/events'>See Tickets</Link>
              </button>
            </div>
          </div>
          <div className={styles.carouselItem}>
            <img
              src='https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='announcement'
            />
            <div className={styles.announcement}>
              <h2>Rock Fest</h2>
              <p>
                Esse aliquip id Lorem pariatur enim irure id aliquip excepteur.
                Sint culpa aliqua laborum Lorem dolore sunt commodo. Est do amet
                sunt sit fugiat.
              </p>
              <button>
                <Link to='/events'>See Tickets</Link>
              </button>
            </div>
          </div>{' '}
          <div className={styles.carouselItem}>
            <img
              src='https://images.unsplash.com/photo-1483821838526-8d9756a6e1ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D'
              alt='announcement'
            />
            <div className={styles.announcement}>
              <h2>Rock Fest</h2>
              <p>
                Esse aliquip id Lorem pariatur enim irure id aliquip excepteur.
                Sint culpa aliqua laborum Lorem dolore sunt commodo. Est do amet
                sunt sit fugiat.
              </p>
              <button>
                <Link to='/events'>See Tickets</Link>
              </button>
            </div>
          </div>{' '}
          <div className={styles.carouselItem}>
            <img
              src='https://images.unsplash.com/photo-1586972246803-d2bdc4006378?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='announcement'
            />
            <div className={styles.announcement}>
              <h2>Rock Fest</h2>
              <p>
                Esse aliquip id Lorem pariatur enim irure id aliquip excepteur.
                Sint culpa aliqua laborum Lorem dolore sunt commodo. Est do amet
                sunt sit fugiat.
              </p>
              <button>
                <Link to='/events'>See Tickets</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementCarousel;
