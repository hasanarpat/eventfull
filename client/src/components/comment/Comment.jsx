import { useState } from 'react';
import styles from './comment.module.css';
import { Link } from 'react-router-dom';

const Comment = () => {
  const [openReplies, setOpenReplies] = useState(false);
  const [openReply, setOpenReply] = useState(false);

  const handleReply = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.comment}>
      <div className={styles.commentDetails}>
        <div className={styles.commentInfo}>
          <div className={styles.userAvatar}>
            <Link to={`/blabla`}>
              <img
                src='https://images.unsplash.com/photo-1715454969547-a69afff2a701?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='arena img'
              />
            </Link>
          </div>
          <div className={styles.nameAndComment}>
            <Link to={`/blabla`}>
              <h6>Jane Doe</h6>
            </Link>
            <span>Dec 04, 2024</span>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            Mollit qui amet minim nulla pariatur qui et consectetur excepteur.
            Dolor laborum sint deserunt veniam qui deserunt eiusmod. Nostrud
            exercitation in cillum sunt nulla elit laboris voluptate ut et in eu
            irure. Mollit qui amet minim nulla pariatur qui et consectetur
            excepteur. Dolor laborum sint deserunt veniam qui deserunt eiusmod.
            Nostrud exercitation in cillum sunt nulla elit laboris voluptate ut
            et in eu irure. Mollit qui amet minim nulla pariatur qui et
            consectetur excepteur. Dolor laborum sint deserunt veniam qui
            deserunt eiusmod. Nostrud exercitation in cillum sunt nulla elit
            laboris voluptate ut et in eu irure. Mollit qui amet minim nulla
            pariatur qui et consectetur excepteur. Dolor laborum sint deserunt
            veniam qui deserunt eiusmod. Nostrud exercitation in cillum sunt
            nulla elit laboris voluptate ut et in eu irure.
          </p>
          <div className={styles.commentActions}>
            <button>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path fill='none' d='M0 0h24v24H0V0zm0 0h24v24H0V0z'></path>
                <path d='M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z'></path>
              </svg>
            </button>
            <span>12</span>
            <button>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path d='M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4V3z'></path>
              </svg>
            </button>
            <span>2</span>
            <button className={styles.reply} onClick={() => setOpenReply(true)}>
              reply
            </button>
          </div>
        </div>
      </div>{' '}
      <button
        className={styles.seeMore}
        onClick={() => setOpenReplies((prev) => !prev)}
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
          style={{ transform: openReplies && 'rotate(180deg)' }}
        >
          <path d='M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z'></path>
        </svg>
        {openReplies ? 'close' : 'see more'} replies
      </button>
      {openReplies && (
        <div className={styles.replies}>
          <Comment />
          <Comment />
        </div>
      )}
      {openReply && (
        <div className={styles.reply}>
          <form onSubmit={handleReply}>
            <textarea
              type='text'
              placeholder='Write your comment here'
              onBlur={() => setOpenReply(false)}
              autoFocus
            />
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
      )}
    </div>
  );
};

export default Comment;
