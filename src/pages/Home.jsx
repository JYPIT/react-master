import { Link } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import Mentor from '../components/Mentor';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
export default function Home() {
  return (
    <div>
      <Navbar>
        <h1>React</h1>
        <Link to='/todo'>TO DO</Link>
        <Link to='/counter'>Counter</Link>
      </Navbar>
      <EmployeeForm />
      <Profile
        image={
          'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=423&q=80'
        }
        name={'Martin'}
        role={'프론트 개발자'}
        isNew={true}
      />
      <Mentor />
    </div>
  );
}
