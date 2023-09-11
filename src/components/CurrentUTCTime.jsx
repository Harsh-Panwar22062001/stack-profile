// CurrentUTCTime.js
import React from 'react';
import './styling/urrentUTCTime.css'

function CurrentUTCTime() {
  const currentUTCTime = Date.now();

  return (
    <div className='current-utc-time' data-testid="currentUTCTime">
      {currentUTCTime}
    </div>
  );
}

export default CurrentUTCTime;
