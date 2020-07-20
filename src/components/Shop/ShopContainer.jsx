import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Proptypes from 'prop-types';

import ShopGeneralInfoContainer from './ShopGeneralInfoContainer';
import ShopProductsContainer from './ShopProductsContainer';

const ShopContainer = ({ match }) => {
  const [enseigne, setEnseigne] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const idEnseigne = match.params.id;
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/shops/${idEnseigne}`)
      .then((res) => res.data)
      .then((data) => setEnseigne(data));

    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/products?shop=${idEnseigne}`)
      .then((res) => res.data)
      .then((data) => setProducts(data));
  }, [match.params.id]);

  return (
    <>
      <ShopGeneralInfoContainer information={enseigne} />
      <ShopProductsContainer products={products} />
    </>
  );
};

ShopContainer.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }),
  }).isRequired,
};
export default ShopContainer;
