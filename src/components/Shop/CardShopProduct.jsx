import React from 'react';
import Proptypes from 'prop-types';
import ButtonPersonnalisation from '../../style/ButtonPersonnalisation';

const CardShopProduct = ({ product }) => {
  return (
    <div className="shop-products-container">
      <div className="card-shop-product">
        <img
          className="card-shop-product-img"
          src={product.image}
          alt={product.name}
        />
        <ButtonPersonnalisation />
      </div>
    </div>
  );
};

CardShopProduct.defaultProps = {
  product: Proptypes.objectOf(Proptypes.string),
};
CardShopProduct.propTypes = {
  product: Proptypes.objectOf(Proptypes.string),
};
export default CardShopProduct;
