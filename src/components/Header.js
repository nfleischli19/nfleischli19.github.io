import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import nf from '../images/logo/nf.png'; // Adjust the path accordingly

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={nf} alt="My Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#intro">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
