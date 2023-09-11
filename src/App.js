// App.js (Parent Component)
import React from 'react';
import './App.css'; // Import your CSS file

import SlackName from './components/SlackName';
import SlackDisplayPicture from './components/SlackDisplayPicture';
import CurrentDayOfTheWeek from './components/CurrentDayOfTheWeek';
import CurrentUTCTime from './components/CurrentUTCTime';
import Track from './components/Track';
import GitHubURL from './components/GitHubURL';

function App() {
  // Define your props
  const slackName = 'Harsh Panwar';
  const trackInfo = "Frontend";
  // You can define other props like slackDisplayImage, currentDay, etc. if needed.

  return (
    <div className="App">
      {/* Render child components and pass props */}
      <SlackName slackName={slackName} />
      
      <SlackDisplayPicture slackUsername={slackName} />
      <CurrentDayOfTheWeek />
      <CurrentUTCTime />
      <Track track={trackInfo} />
      <GitHubURL />
    </div>
  );
}

export default App;
