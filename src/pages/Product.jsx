import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Product() {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
  const { data, isLoading } = useQuery(
    ['products', { checked }],
    async () => {
      console.log('Fetching...');
      return await fetch(`data/${checked ? 'sale_' : ''}products.json`).then(
        (res) => res.json()
      );
    },
    { staleTime: 5000 }
  );
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const handleShowSale = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div>
      <Navbar>
        <Link to='/'>Home</Link>
        <Link to='/todo'>TO DO</Link>
        <Link to='/counter'>Counter</Link>
      </Navbar>
      <form onSubmit={onSubmit}>
        <input name='text' type='text' value={text} onChange={onChange} />
      </form>
      <button onClick={handleShowSale}>Show Sale</button>
      {isLoading ? (
        <h1>Wait...</h1>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
