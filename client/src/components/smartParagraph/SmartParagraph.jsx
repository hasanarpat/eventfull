import styles from './smartParagraph.module.css';

const SmartParagraph = ({ text, type }) => {
  return (
    <div className={styles.smartParagraph}>
      <p>{text}</p>
    </div>
  );
};

export default SmartParagraph;
