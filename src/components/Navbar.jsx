import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeProvider';
import styles from './Navbar.module.css';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function Navbar({ children }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header className={styles.navbar}>
      {children}
      <button onClick={toggleDarkMode}>
        {darkMode ? (
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
    </header>
  );
}
