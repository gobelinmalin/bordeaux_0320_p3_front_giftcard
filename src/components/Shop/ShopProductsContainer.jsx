import React from 'react';
import Proptypes from 'prop-types';
import CardShopProduct from './CardShopProduct';
import '../../style/ShopProductsContainer.css';

const ShopProductsContainer = ({ products }) => {
  return (
    <div className="allproductsshop">
      <h2>SES PRODUITS</h2>
      <hr />
      <div className="cards_shop">
        {products &&
          products.map((product) => (
            <CardShopProduct key={product.id} product={product} />
          ))}
      </div>
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
