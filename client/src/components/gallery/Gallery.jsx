import styles from './gallery.module.css';

const Gallery = ({ setShowGallery }) => {
  return (
    <div className={styles.gallery}>
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
        <div className={styles.seeMore} onClick={() => setShowGallery(true)}>
          See more photos...
        </div>
      </div>
    </div>
  );
};

export default Gallery;
