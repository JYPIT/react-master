import { useState } from 'react';
import '../App.css';
import CounterSub from './CounterSub';

export default function CounterApp() {
  const [isShow, setIsShow] = useState(true);
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='countBar'>
        Total Couont: {count}
        {count > 5 ? '🔥' : '❄️'}
        <button onClick={() => setIsShow((prev) => !prev)}>Show</button>
      </div>
      {isShow && <CounterSub total={count} onClick={handleClick} />}
      {isShow && <CounterSub total={count} onClick={handleClick} />}
    </div>
  );
}
