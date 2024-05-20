import styles from './singleArtist.module.css';
import Gallery from '../../components/gallery/Gallery';
import BigSlider from '../../components/bigSlider/BigSlider';
import { useState } from 'react';
import WriteComment from '../../components/writeComment/WriteComment';
import Comment from '../../components/comment/Comment';

const SingleArtist = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <section className={styles.singleArtist}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <Gallery setShowGallery={setShowGallery} />
          </div>
          {showGallery && <BigSlider setShowGallery={setShowGallery} />}
          <div className={styles.center}>
            <div className={styles.centerTop}>Details</div>
            <div className={styles.centerBottom}>Upcoming Events</div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.comments}>
              <WriteComment />
              <div className={styles.commentList}>
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

export default SingleArtist;
