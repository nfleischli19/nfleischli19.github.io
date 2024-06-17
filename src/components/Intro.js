import React from 'react';
import '../styles/Intro.css';

function Intro() {
  return (
    <section className="intro">
      <div className="intro-text">
        <h1>Your Name</h1>
        <p>Welcome to my personal portfolio website where I showcase my work and share my thoughts.</p>
      </div>
      <div className="intro-image">
        <img src="path/to/your/image.jpg" alt="Your Name" />
      </div>
    </section>
  );
}

export default Intro;
