import styles from './writeComment.module.css';

const WriteComment = () => {
  return (
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
  );
};

export default WriteComment;
