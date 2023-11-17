import './App.css';
import 'nes.css/css/nes.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import TaskPage from './TaskPage/TaskPage';
import StickyNote from './StickyNote/StickyNote';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/taskpage" element={<TaskPage />} />
          <Route path="/sticky-note" element={<StickyNote />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
