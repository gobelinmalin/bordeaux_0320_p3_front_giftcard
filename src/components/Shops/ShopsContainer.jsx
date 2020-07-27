import React from 'react';
import FilterShopContainer from './FilterShopContainer';
import ShopList from './ShopList';
import '../../style/ShopsContainer.css';

const ShopsContainer = () => {
  return (
    <div className="FilterAndCardsContainer">
      <div className="FilterContainer">
        <div>
          <h3>NOS ENSEIGNES</h3>
          <FilterShopContainer />
        </div>
        <hr />
      </div>
      <ShopList />
    </div>
  );
};

export default ShopsContainer;
