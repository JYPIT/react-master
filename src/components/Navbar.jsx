import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeProvider';

export default function Navbar({ children }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <header style={{ background: 'bisque' }}>
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <span style={{ backgroundColor: 'yellow' }}>라이트 모드</span>
        ) : (
          <span style={{ backgroundColor: 'navy', color: 'white' }}>
            다크 모드
          </span>
        )}
      </button>
      {children}
    </header>
  );
}
