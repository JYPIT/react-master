import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: 'Active' });
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <input
        className={styles.input}
        name='todo'
        type='text'
        onChange={onChange}
        value={text}
        placeholder='무엇을 할까요?'
      />
      <button className={styles.button}>추가</button>
    </form>
  );
}
