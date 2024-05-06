import { useState } from 'react';
import styles from './switch.module.css';

const Switch = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <div
      className={styles.switch}
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
    >
      <div
        className={styles.ball}
        style={theme === 'dark' ? { right: '20px' } : { left: '20px' }}
      />
      <div className={styles.icons}>
        <span>🌙</span>
        <span>☀️</span>
      </div>
    </div>
  );
};

export default Switch;
