import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DarkModeProvider from './context/DarkModeProvider';
import Counter from './router/Counter';
import Home from './router/Home';
import Todo from './router/Todo';
export default function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='todo' element={<Todo />} />
            <Route path='counter' element={<Counter />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}
