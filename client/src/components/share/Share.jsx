import styles from './share.module.css';

const Share = ({ setShowShare }) => {
  const url = location.href;
  return (
    <div className={styles.sharePopup}>
      <div className={styles.popupContent}>
        <div className={styles.popupClose}>
          <span onClick={() => setShowShare(false)}>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 512 512'
              height='1.5em'
              width='1.5em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z'></path>
            </svg>
          </span>
        </div>
        <div className={styles.popupUrl}>
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 384 512'
            height='1.25em'
            width='1.25em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z'></path>
          </svg>
          <span>{url}</span>
        </div>
        <p>Share on social platforms</p>
        <div className={styles.popupSocials}>
          <img src='/assets/social-icons/facebook.webp' alt='' />
          <img src='/assets/social-icons/instagram.webp' alt='' />
          <img src='/assets/social-icons/linkedin.webp' alt='' />
          <img src='/assets/social-icons/pinterest.webp' alt='' />
          <img src='/assets/social-icons/x.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Share;
