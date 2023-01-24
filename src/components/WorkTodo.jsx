import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './WorkTodo.module.css';

export default function WorkTodo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'Completed' : 'Active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <>
      <li className={styles.todo}>
        <input
          className={styles.checkbox}
          type='checkbox'
          id={todo.id}
          checked={status === 'Completed'}
          onChange={handleChange}
        />
        <label className={styles.text} htmlFor={todo.id}>
          {text}
        </label>
        <span className={styles.icon}>
          <button className={styles.button} onClick={handleDelete}>
            <FaTrashAlt />
          </button>
        </span>
      </li>
    </>
  );
}
