// CurrentDayOfTheWeek.js


import React from 'react';
import './styling/CurrentDayOfTheWeek.css'
function CurrentDayOfTheWeek() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  return (
    <div className="current-day"  data-testid="currentDayOfTheWeek">
      {currentDay}
    </div>
  );
}

export default CurrentDayOfTheWeek;
