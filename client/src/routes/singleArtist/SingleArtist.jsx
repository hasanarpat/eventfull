import styles from './singleArtist.module.css';
import Gallery from '../../components/gallery/Gallery';
import BigSlider from '../../components/bigSlider/BigSlider';
import { useState } from 'react';
import WriteComment from '../../components/writeComment/WriteComment';
import Comment from '../../components/comment/Comment';
import SmartParagraph from '../../components/smartParagraph/SmartParagraph';

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
            <div className={styles.centerTop}>
              <div className={styles.artistInfo}>
                <h4>Hayko Cepkin</h4>
                <SmartParagraph
                  text='Cillum nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing. Cillum
                  nostrud non ad ullamco elit eu et dolore esse. Proident
                  deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.deserunt sunt aliqua laborum adipisicing duis labore anim
                  nulla. Tempor magna voluptate officia adipisicing.'
                />
                <div className={styles.artistRate}>
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
              <div className={styles.share}>
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 448 512'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zM304 296c-14.562 0-27.823 5.561-37.783 14.671l-67.958-40.775a56.339 56.339 0 0 0 0-27.793l67.958-40.775C276.177 210.439 289.438 216 304 216c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56c0 4.797.605 9.453 1.74 13.897l-67.958 40.775C171.823 205.561 158.562 200 144 200c-30.928 0-56 25.072-56 56s25.072 56 56 56c14.562 0 27.823-5.561 37.783-14.671l67.958 40.775a56.088 56.088 0 0 0-1.74 13.897c0 30.928 25.072 56 56 56s56-25.072 56-56C360 321.072 334.928 296 304 296z'></path>
                </svg>
              </div>
            </div>
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
