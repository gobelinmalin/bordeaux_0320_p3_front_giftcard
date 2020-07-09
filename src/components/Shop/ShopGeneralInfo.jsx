import React from 'react';
import Proptypes from 'prop-types';

const ShopGeneralInfo = ({ shop }) => {
  return (
    <div className="shop-info-container">
      <div className="shop-logo-container">
        <img
          className="shop-info-logo"
          src={shop && shop.logo}
          alt={shop && shop.name}
        />
      </div>
      <div className="shop-info-description">
        <h2>{shop && shop.name}</h2>
        <h3>
          {shop && shop.offline === 1 && 'PHYSIQUE'}
          {shop && shop.offline === 1 && shop && shop.online === 1 && ' ET '}
          {shop && shop.online === 1 && 'EN LIGNE'}
        </h3>
        <p>{shop && shop.description}</p>
      </div>
    </div>
  );
};

ShopGeneralInfo.defaultProps = {
  shop: Proptypes.arrayOf(Proptypes.object),
};
ShopGeneralInfo.propTypes = {
  shop: Proptypes.arrayOf(Proptypes.object),
};
export default ShopGeneralInfo;
