import { Link } from 'react-router-dom';
import CounterApp from '../components/CounterApp';
import Navbar from '../components/Navbar';

export default function Counter() {
  return (
    <div>
      <Navbar>
        <ul>
          <Link to='/'>Home</Link>
        </ul>
        <h1>Counter</h1>
      </Navbar>
      <CounterApp />
    </div>
  );
}
