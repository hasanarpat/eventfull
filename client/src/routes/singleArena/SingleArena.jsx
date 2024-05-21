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
import Rate from '../../components/rate/Rate';

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
                <Rate />
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
