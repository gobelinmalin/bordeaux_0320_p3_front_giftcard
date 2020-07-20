import React from 'react';
import FilterShopContainer from './FilterShopContainer';
import ShopList from './ShopList';
import '../../style/ShopsContainer.css';

const ShopsContainer = () => {
  return (
    <div className="shops-container">
      <h1>NOS ENSEIGNES</h1>
      <div className="shops-filter-and-list">
        <FilterShopContainer />
        <ShopList />
      </div>
    </div>
  );
};

export default ShopsContainer;
