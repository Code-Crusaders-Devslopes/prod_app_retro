import React from "react";

export const Calendar: React.FC = ({}) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDay = 0;

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const startingDay = (firstDayOfMonth.getDay() - startDay + 7) % 7;

  // Get the number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Generate the rows and cells for the calendar
  const rows = [];
  let cells = [];

  for (let i = 0; i < startingDay; i++) {
    cells.push(<td key={`empty-${i}`} />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    // Create a new row for each week
    if (cells.length === 7) {
      rows.push(<tr key={day}>{cells}</tr>);
      cells = [];
    }

    // Create a new cell for each day
    cells.push(<td key={day}>{day}</td>);
  }

  // Add the remaining cells to the last row
  if (cells.length > 0) {
    rows.push(<tr key="last">{cells}</tr>);
  }

  return (
    <div>
      <h1>Calendar</h1>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Calendar;
