import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';

function Header() {
    return (
      <header className="header">
        <nav>
          <Link to="/" className="logo">
          <img src={logo} alt="Meiryn Box Logo" className="logo-image" />
          Meiryn Box
          </Link>
          <ul>
            <li><Link to="/">Produkte</Link></li>
            <li><Link to="/cart">Warenkorb</Link></li>
            {/* Wishlist ist eine Möglichkeit, damit es später weiter entwickelt wird */}
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;