import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadShop } from '../../actions/generalActions';

// import ButtonLearnMore from '../../style/ButtonLearnMore';

const AdminShopCard = ({ loadShop, email, password, shop }) => {
  const [cards, setCards] = useState([]);
  const [shopData, setShopData] = useState([]);
  let shopInfo;
  if (shop) {
    // eslint-disable-next-line react/prop-types
    shopInfo = shop.authdata.user[0];
    //  all info of the shop
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/shops/${shopInfo.id_shop}`)
      .then((res) => console.log('1', res.data[0]));
    // .then((data) => setShopData(data));
    //  all cards of the shop
    if (shopData) {
      axios
        .get(`http://localhost:5000/api/products?shop=${shopData.name}`)
        .then((res) => console.log(res));
      // .then((data) => setCards(data));
    }
  }

  useEffect(() => {
    loadShop(email, password);
  }, [loadShop, email, password]);

  return (
    <div>
      {/* {shop ? (
        cards.map((card) => (
          <div>
            <img src={card.img} alt={shopData.name} />
            <ButtonLearnMore />
          </div>
        ))
      ) : ( */}
      <p>loading...</p>
      {/* )} */}
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
