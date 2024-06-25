import React from 'react';
import '../../styles/Discord.css'; // Specific CSS file for the project
import discordimg from '../../images/discord3.png'; // Image for the project

function Discord() {
  return (
    <div className="poster-container">
      <img src={discordimg} alt="Moderating Pig Butchering Scams on Discord Poster" className="poster-image" />
    </div>
  );
}

export default Discord;
