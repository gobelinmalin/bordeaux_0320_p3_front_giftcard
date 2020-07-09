import React from 'react';
import Proptypes from 'prop-types';
import CardShopProduct from './CardShopProduct';
import '../../style/ShopProductsContainer.css';

const ShopProductsContainer = ({ products }) => {
  return (
    <div>
      {products &&
        products.map((product) => <CardShopProduct product={product} />)}
    </div>
  );
};

ShopProductsContainer.defaultProps = {
  products: Proptypes.arrayOf(Proptypes.object),
};
ShopProductsContainer.propTypes = {
  products: Proptypes.arrayOf(Proptypes.object),
};
export default ShopProductsContainer;
