/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../../style/CardProduct.css';
import { Link } from 'react-router-dom';
import ButtonPersonnalisation from '../../style/ButtonPersonnalisation';
import * as actionCreators from '../../actions/index';

const CardProduct = ({ product, addToCart }) => {
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
      <ButtonPersonnalisation addToCart={() => addToCart(product)} />
    </Link>
  );
};
const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(actionCreators.addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
