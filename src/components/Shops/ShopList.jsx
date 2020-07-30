import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../actions/index';

const ShopList = (props) => {
  const { shops, setFinalShopArray } = props;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/shops/products`)
      .then((res) => res.data)
      .then((data) => setFinalShopArray(data));
  }, [setFinalShopArray]);

  let unique;
  const getUniqueCard = (arr, comp) => {
    unique = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
  };

  getUniqueCard(shops, 'id');

  return (
    <>
      {shops && shops.length > 0 ? (
        <div className="FinalFilter">
          {unique.map((shop) => (
            <Link
              to={`/enseignes/${shop.id}`}
              className="shoplist-button"
              key={shop.id}
            >
              <img className="shoplist-logo" src={shop.logo} alt={shop.name} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="FinalFilter">
          Aucune enseigne correspondante à votre recherche
        </p>
      )}
    </>
  );
};

ShopList.propTypes = {
  setFinalShopArray: PropTypes.func,
  shops: PropTypes.arrayOf(PropTypes.any),
};

ShopList.defaultProps = {
  shops: [],
  setFinalShopArray: '',
};

const mapStateToProps = (state) => {
  return {
    shops: state.shop.finalArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFinalShopArray: (array) =>
      dispatch(actionCreators.setFinalShopArray(array)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
