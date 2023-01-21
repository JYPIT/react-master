import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DarkModeProvider from './context/DarkModeProvider';
import Home from './router/Home';
import Timer from './router/Timer';

export default function App() {
  return (
    <>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='timer' element={<Timer />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}
