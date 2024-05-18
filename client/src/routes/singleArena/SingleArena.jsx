import { useState } from 'react';
import styles from './singleArena.module.css';
import { Link } from 'react-router-dom';
import Comment from '../../components/comment/Comment';
import BigSLider from '../../components/bigSlider/BigSlider';

const SingleArena = () => {
  const [showGallery, setShowGallery] = useState(false);

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
          {showGallery && <BigSLider setShowGallery={setShowGallery} />}
          <div className={styles.center}>
            <div className={styles.centerTop}>
              <div className={styles.centerTopLeft}>
                <h3>Arena Rock Stadium</h3>
                <p>
                  Consequat voluptate amet pariatur nulla. Reprehenderit
                  excepteur laboris do veniam. Sunt officia esse duis nostrud
                  est pariatur. Consequat voluptate amet pariatur nulla.
                  Reprehenderit excepteur laboris do veniam. Sunt officia esse
                  duis nostrud est pariatur. Consequat voluptate amet pariatur
                  nulla. Reprehenderit excepteur laboris do veniam. Sunt officia
                  esse duis nostrud est pariatur. Consequat voluptate amet
                  pariatur nulla. Reprehenderit excepteur laboris do veniam.
                  Sunt officia esse duis nostrud est pariatur. Consequat
                  voluptate amet pariatur nulla. Reprehenderit excepteur laboris
                  do veniam. Sunt officia esse duis nostrud est pariatur.
                  Consequat voluptate amet pariatur nulla. Reprehenderit
                  excepteur laboris do veniam. Sunt officia esse duis nostrud
                  est pariatur. Consequat voluptate amet pariatur nulla.
                  Reprehenderit excepteur laboris do veniam. Sunt officia esse
                  duis nostrud est pariatur.nostrud est pariatur. Consequat
                  voluptate amet pariatur nulla. Reprehenderit excepteur laboris
                  do veniam. Sunt officia esse duis nostrud est pariatur.
                  Consequat voluptate amet pariatur nulla. Reprehenderit
                  excepteur laboris do veniam. Sunt officia esse duis nostrud
                  est pariatur. Consequat voluptate amet pariatur nulla.
                  Reprehenderit excepteur laboris do veniam. Sunt officia esse
                  duis nostrud est pariatur.nostrud est pariatur. Consequat
                  voluptate amet pariatur nulla. Reprehenderit excepteur laboris
                  do veniam. Sunt officia esse duis nostrud est pariatur.
                  Consequat voluptate amet pariatur nulla. Reprehenderit
                  excepteur laboris do veniam. Sunt officia esse duis nostrud
                  est pariatur. Consequat voluptate amet pariatur nulla.
                  Reprehenderit excepteur laboris do veniam. Sunt officia esse
                  duis nostrud est pariatur.nostrud est pariatur. Consequat
                  voluptate amet pariatur nulla. Reprehenderit excepteur laboris
                  do veniam. Sunt officia esse duis nostrud est pariatur.
                  Consequat voluptate amet pariatur nulla. Reprehenderit
                  excepteur laboris do veniam. Sunt officia esse duis nostrud
                  est pariatur. Consequat voluptate amet pariatur nulla.
                  Reprehenderit excepteur laboris do veniam. Sunt officia esse
                  duis nostrud est pariatur.nostrud est pariatur. Consequat
                  voluptate amet pariatur nulla. Reprehenderit excepteur laboris
                  do veniam. Sunt officia esse duis nostrud est pariatur.
                  Consequat voluptate amet pariatur nulla. Reprehenderit
                  excepteur laboris do veniam. Sunt officia esse duis nostrud
                  est pariatur. Consequat voluptate amet pariatur nulla.
                  Reprehenderit excepteur laboris do veniam. Sunt officia esse
                  duis nostrud est pariatur.
                </p>
                <p>3204 St. Revenue Avenue Gazhane Istanbul</p>
                <div className={styles.arenaRate}>
                  {' '}
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 576 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
                  </svg>{' '}
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 576 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
                  </svg>{' '}
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 576 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
                  </svg>{' '}
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 576 512'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
                  </svg>
                </div>
              </div>
              <div className={styles.centerTopRight}>map</div>
            </div>
            <div className={styles.centerBottom}>
              <Link to='/'>See Arena Webpage</Link>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.comments}>
              <div className={styles.writeComment}>
                <div className={styles.userAvatar}>
                  <img
                    src='https://images.unsplash.com/photo-1715454969547-a69afff2a701?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt='arena img'
                  />
                </div>
                <div className={styles.input}>
                  <form action=''>
                    <input type='text' placeholder='Write your comment here' />
                    <button>
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 512 512'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8z'></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
              <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleArena;
