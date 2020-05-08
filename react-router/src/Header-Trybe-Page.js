import React from 'react';
import { Link } from 'react-router-dom';
import trybeLogo from './trybe-logo.png';
import './Header.css';

function Header() {
  return (
    <header className="trybe-header">
      <nav className="trybe-nav">
        <Link to="/"><img src={trybeLogo} alt="Logo da trybe" /></Link>
        <Link to="/solutions">Gabaritos</Link>
        <Link to="/schedule">Agenda</Link>
        <Link to="/trybe-content">Conteúdo</Link>
        <Link to="/setup">Setup inicial</Link>
      </nav>
    </header>
  );
}

export default Header;
