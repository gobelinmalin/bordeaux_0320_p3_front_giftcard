/* eslint-disable react/prop-types */
import React from 'react';
import '../../style/CardProduct.css';
import { Link } from 'react-router-dom';
import ButtonPersonnalisation from '../../style/ButtonPersonnalisation';

const CardProduct = ({ product }) => {
  return (
    <Link to={`/cartes-cadeaux/${product.id}`} className="card-product">
      <img
        src={product.image}
        alt={product.name}
        className="card-product-img"
      />
      <h4>{product.name}</h4>
      <p>à partir de {product.credit}€</p>
      <ButtonPersonnalisation />
    </Link>
  );
};

export default CardProduct;
