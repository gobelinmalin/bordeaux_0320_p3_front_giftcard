import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonPersonnalisation from '../../style/ButtonPersonnalisation';

const CardShopProduct = ({ product }) => {
  return (
    <>
      {product ? (
        <Link to={`/cartes-cadeaux/${product.id_product}`}>
          <div className="card_content-shop">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.credit}€</p>
            <ButtonPersonnalisation />
          </div>
        </Link>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

CardShopProduct.defaultProps = {
  product: {},
};
CardShopProduct.propTypes = {
  product: Proptypes.objectOf(Proptypes.any),
};
export default CardShopProduct;
