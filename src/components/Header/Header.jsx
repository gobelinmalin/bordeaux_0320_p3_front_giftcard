import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logoSvg from '../../style/images/LogoGivYoo.svg';

import '../../style/Header.css';

function Header({isAuthenticated}) {
  return (
    <nav className="Header">
      <Link to="/">
        <img src={logoSvg} className="Header_logo" alt="logo Givyoo" />
      </Link>
      <div className="Header_links">
        <Link className="Header_link" to="/">
          Comment ça marche ?
        </Link>
        <Link className="Header_link" to="/">
          Cartes cadeaux
        </Link>
        <Link className="Header_link" to="/">
          Enseignes
        </Link>
        <Link className="Header_link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="Header_icons">
        <div className="Header_icons_container">
          {isAuthenticated ? 
          <Link className="Header_icon" to="/mon-espace/:user">
            <i className="fas fa-user" />
            <p className="Header_icons_description">MON ESPACE</p>
          </Link>
          :
          <Link className="Header_icon" to="/connexion">
            <i className="fas fa-user" />
            <p className="Header_icons_description">SE CONNECTER</p>
          </Link>}
        </div>
        <div className="Header_icons_container">
          <Link className="Header_icon" to="/">
            <i className="fas fa-heart" />
            <p className="Header_icons_description">FAVORIS</p>
          </Link>
        </div>
        <div className="Header_icons_container">
          <Link className="Header_icon" to="/">
            <i className="fas fa-shopping-cart" />
            <p className="Header_icons_description">PANIER</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Header);