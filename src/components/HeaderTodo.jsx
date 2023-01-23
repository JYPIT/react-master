import { BsSun, BsMoonFill } from 'react-icons/bs';
import { useState } from 'react';
import styles from './HeaderTodo.module.css';

export default function HeaderTodo({ filters, filter, onFilterChange }) {
  const [isDark, setIsDark] = useState(false);
  const handleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        <button className={styles.filter} onClick={handleDarkMode}>
          {isDark ? <BsSun /> : <BsMoonFill />}
        </button>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              } `}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
