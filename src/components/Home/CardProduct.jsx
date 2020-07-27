/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/CardProduct.css';
import { Link } from 'react-router-dom';
import ButtonPersonnalisation from '../../style/ButtonPersonnalisation';

const CardProduct = ({ product }) => {
  const [priceCard, setPriceCard] = useState();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/products/${product.id}`)
      .then((res) => res.data)
      .then((data) => Math.min(...data.map((o) => o.credit)))
      .then((results) => setPriceCard(results))
      .catch((err) => {
        console.log(err);
      });
  }, [product.id]);

  return (
    <Link to={`/cartes-cadeaux/${product.id}`} className="card-product">
      <img
        src={product.image}
        alt={product.name}
        className="card-product-img"
      />
      <h4>{product.name}</h4>
      {priceCard && <p>à partir de {priceCard}€</p>}
      <ButtonPersonnalisation />
    </Link>
  );
};

export default CardProduct;
