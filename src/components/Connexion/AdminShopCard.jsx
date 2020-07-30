/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../style/AdminShop.css';
import { connect } from 'react-redux';
import { loadShop } from '../../actions/generalActions';

const AdminShopCard = ({ loadShop, shop }) => {
  const [cards, setCards] = useState([]);
  const [shopData, setShopData] = useState([]);

  let shopInfo;
  if (shop) {
    shopInfo = shop.authdata.user[0];
  }

  useEffect(() => {
    loadShop(localStorage.getItem('token'));
  }, [loadShop]);

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
          `${process.env.REACT_APP_LOCALHOST}/api/products?shop=${shopData.id}`
        )
        .then((res) => res.data)
        .then((data) => setCards(data));
    }
  }, [shopData]);

  return (
    <div className="cards_online">
      {shop ? (
        cards.map((card) => (
          <Link to="/">
            <div className="card_content">
              <h3>{card.name}</h3>
              <p>{card.credit}€</p>
              <img src={card.image} alt={shopData.name} />
            </div>
          </Link>
        ))
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
