import styles from './Navbar.module.css';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useState } from 'react';

export default function Navbar({ children }) {
  const [isDark, setIsDark] = useState(false);
  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <nav className={styles.navbar}>
      {children}
      <button onClick={handleDarkMode}>
        {isDark ? (
          <span style={{ fontSize: '20px' }}>
            <BsSun />
          </span>
        ) : (
          <span
            style={{
              fontSize: '20px',
            }}
          >
            <BsMoon />
          </span>
        )}
      </button>
    </nav>
  );
}
