// SlackName.js (Child Component)
import React from 'react';
import './styling/SlackName.css'

function SlackName(props) {
  return (
    <div   className="slack-name" data-testid="slackUserName">
      {props.slackName}
    </div>
  );
}

export default SlackName;
