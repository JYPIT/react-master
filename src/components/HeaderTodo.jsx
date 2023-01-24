import { BsSun, BsMoonFill } from 'react-icons/bs';
import { useDarkMode } from '../context/DarkModeProvider';
import styles from './HeaderTodo.module.css';

export default function HeaderTodo({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        <button className={styles.filter} onClick={toggleDarkMode}>
          {darkMode ? <BsMoonFill /> : <BsSun />}
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
