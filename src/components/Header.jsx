import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../style/images/LogoGivYoo.svg';

import '../style/css/Header.css';

function Header() {
    return (
      <nav className="Header">
        <Link to="/">
        <img src={logoSvg} className="Header_logo" alt="logo Givyoo" />
        </Link>
        <div className="Header_links">
            <Link className="Header_link" to="/">Comment ça marche ?</Link>
            <Link className="Header_link" to="/">Cartes cadeaux</Link>
            <Link className="Header_link" to="/">Enseignes</Link>
        </div>
        <div className="Header_icons">
            <div className="Header_icons_container">
              <Link className="Header_icon" to="/">
                <i className="fas fa-user"></i>
                <a className="Header_icons_description">SE CONNECTER</a>
              </Link>    
            </div>
            <div className="Header_icons_container">
              <Link className="Header_icon" to="/">
                <i className="fas fa-heart"></i>
                <a className="Header_icons_description">FAVORIS</a>
              </Link>
            </div>
            <div className="Header_icons_container">
              <Link className="Header_icon" to="/">
                <i className="fas fa-shopping-cart"></i>
                <a className="Header_icons_description">PANIER</a>
              </Link>
            </div>
        </div>
      </nav>
    );
  }
export default Header;