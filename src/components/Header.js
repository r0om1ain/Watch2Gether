import React from 'react';
import '../styles/Header.css';
import img from '../assets/film.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header-container">
        <img className="logo"src={img} alt=""/>
      <h1>Watch2Gether</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/quizz">Quizz</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;