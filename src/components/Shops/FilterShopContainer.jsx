import React from 'react';

const FilterShopContainer = () => {
  return (
    <div className="shops-filter">
      <h3>VILLE</h3>
      <select className="town" id="town-select">
        <option value="">--Sélectionnez votre ville--</option>
        <option value="Bordeaux">Bordeaux</option>
        <option value="Lyon">Lyon</option>
        <option value="Paris">Paris</option>
        <option value="Toulouse">Toulouse</option>
        <option value="Pau">Pau</option>
        <option value="Lille">Lille</option>
      </select>
      <h3>TYPE D&apos;ENSEIGNE</h3>
      <button type="button" className="shops-button">
        Boutique en ligne
      </button>
      <button type="button" className="shops-button">
        Boutique physique
      </button>
      <h3>DESTINATAIRE</h3>
      <div className="shops-filter-box">
        <div className="shops-button-filter">
          <button type="button" className="shops-button">
            Femme
          </button>
          <button type="button" className="shops-button">
            Homme
          </button>
          <button type="button" className="shops-button">
            Couple
          </button>
        </div>
        <div className="shops-button-filter">
          <button type="button" className="shops-button">
            Enfant
          </button>
          <button type="button" className="shops-button">
            Bébé
          </button>
          <button type="button" className="shops-button">
            Animal de compagnie
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterShopContainer;
