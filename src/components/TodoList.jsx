import { useState } from 'react';
import AddTodo from '../components/AddTodo';
import WorkTodo from './WorkTodo';
import styles from './TodoList.module.css';
import { useEffect } from 'react';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromStorage);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };
  const filtered = getFilteredItems(todos, filter);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <WorkTodo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </div>
  );
}

function readTodosFromStorage() {
  const localTodos = localStorage.getItem('todos');
  return localTodos ? JSON.parse(localTodos) : [];
}

function getFilteredItems(todos, filter) {
  if (filter === 'All') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
