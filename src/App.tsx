import "./App.css";
import "nes.css/css/nes.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import TaskPage from "./TaskPage/TaskPage";
import StickyNote from "./StickyNote/StickyNote";
import { Calendar } from "./Calendar/Calendar";

function App() {
  const currentDate = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDay = 0;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/taskpage" element={<TaskPage />} />
          <Route path="/sticky-note" element={<StickyNote />} />
          <Route
            path="/calendar"
            element={
              <Calendar
                currentDate={currentDate}
                daysOfWeek={daysOfWeek}
                startDay={startDay}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
