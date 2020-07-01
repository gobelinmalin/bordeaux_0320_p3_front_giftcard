/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { loadShop } from '../../actions/generalActions';

const AdminShopInfo = ({ loadShop, email, password, shop }) => {
  const [shopData, setShopData] = useState([]);
  let shopInfo;
  if (shop) {
    shopInfo = shop.authdata.user[0];
    // all info of the shop
    Axios.get(
      `${process.env.REACT_APP_LOCALHOST}/api/shops/${shopInfo.id_shop}`
    )
      .then((res) => res.data[0])
      .then((data) => setShopData(data));
  }

  useEffect(() => {
    loadShop(email, password);
  }, [loadShop, email, password]);

  return (
    <div>
      {/* {shop ? (
        <div className="info-content">
          <div className="info-text">
            <p>Nom de l'enseigne</p>
            <hr />
            <p>Personne à contacter</p>
            <hr />
            <p>Adresse du siège social</p>
            <hr />
            <p>Téléphone</p>
            <hr />
            <p>E-mail</p>
          </div>
          <hr />
          <div className="info-text">
            <p>{shopData.name}</p>
            <hr />
            <p>{shopInfo.contactPerson}</p>
            <hr />
            <p>
              {shopData.address}, {shopData.zipcode} {shopData.city},
              {shopData.country}
            </p>
            <hr />
            <p>{shopData.phone}</p>
            <hr />
            <p>{shopInfo.email}</p>
          </div>
        </div>
      ) : ( */}
      <p>loading...</p>
      {/* )} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shop: state.authShop.shop,
  };
};

export default connect(mapStateToProps, { loadShop })(AdminShopInfo);
