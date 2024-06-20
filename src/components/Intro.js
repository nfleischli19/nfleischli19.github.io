import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Intro.css';
import name from '../images/logo/name.png';

function Intro() {
  return (
    <div>
      <section className="intro">
        <div className="name">
          <Link to="/">
            <img src={name} alt="My Logo" />
          </Link>
        </div>
        <div className="intro-text">
          <p>Welcome to my personal website! I'm so glad you stopped by. Please explore my work and thoughts below.</p>
        </div>
        {/* <div className="intro-image">
          <img src="../images/intro.png" alt="Your Name" />
        </div> */}
      </section>
    </div>
  );
}

export default Intro;
