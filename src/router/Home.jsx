import { Link } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import Mentor from '../components/Mentor';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
export default function Home() {
  return (
    <div>
      <Navbar>
        <h1>Home</h1>
        <ul>
          <Link to='/timer'>타이머</Link>
        </ul>
      </Navbar>
      <EmployeeForm />
      <Profile />
      <Mentor />
    </div>
  );
}
