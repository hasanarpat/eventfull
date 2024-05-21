import styles from './smartParagraph.module.css';

const SmartParagraph = ({ text, type }) => {
  const fontSize = type === 'arena' ? 18 : type === 'artist' ? 13 : 16;
  return (
    <div className={styles.smartParagraph}>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};

export default SmartParagraph;
