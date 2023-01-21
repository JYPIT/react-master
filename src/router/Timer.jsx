import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CounterApp from '../components/CounterApp';
import Navbar from '../components/Navbar';

export default function Timer() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`data/products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('데이터 가져옴:)');
        setData(data);
      })
      .catch((error) => {
        console.log(Error('데이터 고장'));
      });
  }, []);
  console.log(data);
  return (
    <div>
      <Navbar>
        <h1>Timer</h1>
        <ul>
          <Link to='/'>Home</Link>
        </ul>
      </Navbar>
      <CounterApp />
    </div>
  );
}
