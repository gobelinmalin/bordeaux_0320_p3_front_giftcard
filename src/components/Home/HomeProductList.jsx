/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getProducts } from '../../actions/generalActions';
import CardProduct from './CardProduct';

const HomeProductList = ({ onglets, newProducts }) => {
  const [monthProducts, setMonthProducts] = useState([]);
  useEffect(() => {
    // product reducer => new products
    getProducts();
    // product of the month
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/orders/products`)
      .then((res) => res.data)
      .then((results) => setMonthProducts(results))
      .catch((err) => {
        console.log(err);
      });
  }, [getProducts]);

  return (
    <div className="container-products">
      {onglets === 1 ? (
        <>
          {newProducts.length > 0 ? (
            newProducts
              .slice(0, 8)
              .map((product) => (
                <CardProduct key={product.id} product={product} />
              ))
          ) : (
            <p>Il n&apos;y a pas de nouveautés pour ce mois.</p>
          )}
        </>
      ) : (
        <>
          {monthProducts.length > 0 ? (
            monthProducts
              .slice(0, 8)
              .map((product) => (
                <CardProduct key={product.id} product={product} />
              ))
          ) : (
            <p>Il n&apos;y a pas encore de cartes du mois</p>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newProducts: state.product.newProducts,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { getProducts })(HomeProductList);
