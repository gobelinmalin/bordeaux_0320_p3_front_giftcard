import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="Banner">
      <div className="IconAndTextContainer">
        <i className="fas fa-gift" />
        <p>Cadeau 100% personnalisé</p>
      </div>
      <div className="IconAndTextContainer">
        <i className="far fa-smile-wink" />
        <p>Une équipe à votre écoute</p>
      </div>
      <div className="IconAndTextContainer">
        <i className="fas fa-paper-plane" />
        <p>Livraison le jour de votre choix</p>
      </div>
      <div className="IconAndTextContainer">
        <i className="far fa-credit-card" />
        <p>Paiement sécurisé</p>
      </div>
    </div>
  );
};

export default Banner;
