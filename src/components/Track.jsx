// Track.js
import React from 'react';
import './styling/Track.css'

function Track(props) {
  return (
    <div  className="track" data-testid="myTrack">
      {props.track}
    </div>
  );
}

export default Track;
