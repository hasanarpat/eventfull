import { useState } from 'react';
import styles from './singleArena.module.css';
import { Link } from 'react-router-dom';
import Comment from '../../components/comment/Comment';
import Gallery from '../../components/gallery/Gallery';
import BigSLider from '../../components/bigSlider/BigSlider';
import Map from '../../components/map/Map';
import SmartParagraph from '../../components/smartParagraph/SmartParagraph';
import { mapItems } from '../../data/mock-map';
import WriteComment from '../../components/writeComment/WriteComment';

const SingleArena = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section className={styles.singleArena}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <Gallery setShowGallery={setShowGallery} />
          </div>
          {showGallery && <BigSLider setShowGallery={setShowGallery} />}
          <div className={styles.center}>
            <div className={styles.centerTop}>
              <div className={styles.centerTopLeft}>
                <h3>Arena Rock Stadium</h3>
                <SmartParagraph
                  text='Consequat voluptate amet pariatur nulla. Reprehenderit
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
                  duis nostrud est pariatur.'
                  type='arena'
                />
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
              <div className={styles.centerTopRight}>
                <Map items={[mapItems[3]]} />
              </div>
            </div>
            <div className={styles.centerBottom}>
              <Link to='/'>See Arena Webpage</Link>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.comments}>
              <WriteComment />
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
