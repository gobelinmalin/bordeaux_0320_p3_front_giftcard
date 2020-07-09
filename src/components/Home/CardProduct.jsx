/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import '../../style/CardProduct.css';
import { Link } from 'react-router-dom';
import ButtonPersonnalisation from '../../style/ButtonPersonnalisation';
import * as actionCreators from '../../actions/index';

const CardProduct = ({ product, addToCart }) => {
  return (
    <Link to={`/cartes-cadeaux/${product.id}`} className="card-product">
      <img
        src={product.image}
        alt={product.name}
        className="card-product-img"
      />
      <h4>{product.name}</h4>
      <p>à partir de {product.credit}€</p>
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
