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
      .get(`http://localhost:3000/api/shops/${idEnseigne}`)
      .then((res) => res.data)
      .then((data) => setEnseigne(data));

    axios
      .get(`http://localhost:3000/api/products?shop=${idEnseigne}`)
      .then((res) => res.data)
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ShopGeneralInfoContainer information={enseigne} />
      <ShopProductsContainer products={products} />
    </>
  );
};

/* ShopContainer.defaultProps = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }),
  }).isRequired,
}; */
ShopContainer.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }),
  }).isRequired,
};
export default ShopContainer;
