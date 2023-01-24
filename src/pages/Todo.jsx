import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderTodo from '../components/HeaderTodo';
import Navbar from '../components/Navbar';
import TodoList from '../components/TodoList';
import DarkModeProvider from '../context/DarkModeProvider';
import styles from './Todo.module.css';

const filters = ['All', 'Active', 'Completed'];
export default function Todo() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Navbar>
        <Link to='/'>Home</Link>
      </Navbar>
      <div className={styles.wrapper}>
        <div className={styles.todoBox}>
          <HeaderTodo
            filters={filters}
            filter={filter}
            onFilterChange={setFilter}
          />
          <TodoList filter={filter} />
        </div>
      </div>
    </DarkModeProvider>
  );
}
