/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadShop } from '../../actions/generalActions';

const AdminShopCard = ({ loadShop, email, password, shop }) => {
  const [cards, setCards] = useState([]);
  const [shopData, setShopData] = useState([]);

  let shopInfo;
  if (shop) {
    shopInfo = shop.authdata.user[0];
  }

  useEffect(() => {
    loadShop(email, password);
  }, [loadShop, email, password]);

  // all info of the shop
  useEffect(() => {
    if (shopInfo) {
      axios
        .get(`${process.env.REACT_APP_LOCALHOST}/api/shops/${shopInfo.id_shop}`)
        .then((res) => res.data[0])
        .then((data) => setShopData(data));
    }
  }, [shopInfo]);

  useEffect(() => {
    if (shopData) {
      axios
        .get(
          `${process.env.REACT_APP_LOCALHOST}/api/products?shop=${shopData.name}`
        )
        .then((res) => res.data)
        .then((data) => setCards(data));
    }
  }, [shopData]);

  return (
    <div className="cards_online">
      {shop ? (
        cards.map((card) => <img src={card.image} alt={shopData.name} />)
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

AdminShopCard.propTypes = {
  shop: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  loadShop: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

AdminShopCard.defaultProps = {
  shop: [],
};

const mapStateToProps = (state) => {
  return {
    shop: state.authShop.shop,
  };
};

export default connect(mapStateToProps, { loadShop })(AdminShopCard);
