import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MyLogo</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
