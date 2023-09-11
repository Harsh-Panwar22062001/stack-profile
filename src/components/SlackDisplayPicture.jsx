// SlackDisplayPicture.js
import React from 'react';
import './styling/SlackDisplayPicture.css'

function SlackDisplayPicture(props) {
  const imageUrl = 'pro.png'; // Specify the image URL
  const profileUrl = 'https://example.com/your-profile'; // Specify the profile URL

  return (

    <div className='slack-display-picture'>
         <a href={profileUrl} target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt={props.slackUsername} data-testid="slackDisplayImage"  className="profile-image" />
    </a>
    </div>

   
  );
}

export default SlackDisplayPicture;
