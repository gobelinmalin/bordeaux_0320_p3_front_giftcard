import React from 'react';
import FilterCardContainer from './FilterCardContainer';
import './CardsContainer.css';
import CardList from './CardList';

const CardsContainer = () => {
  return (
    <div className="FilterAndCardsContainer">
      <div className="FilterContainer">
        <h3>NOS CARTES</h3>
        <FilterCardContainer />
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default CardsContainer;
