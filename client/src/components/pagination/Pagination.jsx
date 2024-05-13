import { useSearchParams } from 'react-router-dom';
import styles from './pagination.module.css';

const Pagination = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationContainer}>
        <div className={styles.paginationWrapper}>
          <button disabled={page === null}>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path d='M6 6h2v12H6zm3.5 6 8.5 6V6z'></path>
            </svg>
          </button>
          <ul className={styles.pageList}>
            <li className={styles.page}>
              <button
                style={{
                  backgroundColor: page === null && '#379cb4',
                  borderColor: page === null && '#379cb4',
                }}
              >
                1
              </button>
            </li>
            <li className={styles.page}>
              <button
                style={{
                  backgroundColor: parseInt(page) === 2 && '#379cb4',
                  borderColor: parseInt(page) === 2 && '#379cb4',
                }}
              >
                2
              </button>
            </li>
            <li className={styles.page}>
              <button
                style={{
                  backgroundColor: parseInt(page) === 3 && '#379cb4',
                  borderColor: parseInt(page) === 3 && '#379cb4',
                }}
              >
                3
              </button>
            </li>
            <li className={styles.page}>
              <button
                style={{
                  backgroundColor: parseInt(page) === 4 && '#379cb4',
                  borderColor: parseInt(page) === 4 && '#379cb4',
                }}
              >
                4
              </button>
            </li>
            <li className={styles.page}>
              <button
                style={{
                  backgroundColor: parseInt(page) === 5 && '#379cb4',
                  borderColor: parseInt(page) === 5 && '#379cb4',
                }}
              >
                5
              </button>
            </li>
            <li className={styles.page}>
              <button>...</button>
            </li>
          </ul>
          <button disabled={page === null}>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path d='m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z'></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
