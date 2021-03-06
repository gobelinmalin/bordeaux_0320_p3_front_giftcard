import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Proptypes from 'prop-types';
import CardGeneralInfoContainer from './CardGeneralInfoContainer';
import CardDetail from './CardDetail';
import CardsSlider from './CardsSlider';
import '../../style/CardContainer.css';

const CardContainer = ({ match }) => {
  const [product, setProduct] = useState([]);
  const [shop, setShop] = useState({});
  const [theme, setTheme] = useState('');
  const [sameCards, setSameCards] = useState([]);

  useEffect(() => {
    const idCard = match.params.id;
    // get product by it's id
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/products/${idCard}`)
      .then((res) => res.data)
      .then((data) => setProduct(data));
  }, [match.params.id]);

  const infoProduct = product[0];

  useEffect(() => {
    if (infoProduct) {
      // get shop of one product
      axios
        .get(
          `${process.env.REACT_APP_LOCALHOST}/api/shops/${infoProduct.id_shop}`
        )
        .then((res) => res.data[0])
        .then((data) => setShop(data));
      // get theme by it's id
      axios
        .get(
          `${process.env.REACT_APP_LOCALHOST}/api/themes/${infoProduct.id_theme}`
        )
        .then((res) => res.data[0])
        .then((data) => setTheme(data));
    }
  }, [infoProduct]);

  useEffect(() => {
    if (theme.name) {
      // get all cards from one theme
      axios
        .get(
          `${process.env.REACT_APP_LOCALHOST}/api/products?theme=${theme.name}`
        )
        .then((res) => res.data.filter((card) => card.id !== product.id))
        .then((data) => setSameCards(data));
    }
  }, [product.id, theme.name]);

  return (
    <div className="cardcontainer">
      <CardGeneralInfoContainer product={product} shop={shop} />
      <CardDetail shop={shop} />
      <CardsSlider sameCards={sameCards} infoProduct={infoProduct} />
    </div>
  );
};

CardContainer.propTypes = {
  match: Proptypes.shape({
    params: Proptypes.shape({
      id: Proptypes.string,
    }),
  }).isRequired,
};

export default CardContainer;
