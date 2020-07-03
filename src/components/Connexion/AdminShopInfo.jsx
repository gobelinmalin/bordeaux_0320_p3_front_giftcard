/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import '../../style/AdminShop.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { loadShop } from '../../actions/generalActions';

const AdminShopInfo = ({ loadShop, email, password, shop }) => {
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
      Axios.get(
        `${process.env.REACT_APP_LOCALHOST}/api/shops/${shopInfo.id_shop}`
      )
        .then((res) => res.data[0])
        .then((data) => setShopData(data));
    }
  }, [shopInfo]);

  const useStyles = makeStyles(() => ({
    Button: {
      color: '#231864',
      backgroundColor: '#fff',
      '&:hover': {
        background: '#fff',
      },
      borderRadius: '10px',
      border: '0.1rem solid #231864',
      textTransform: 'inherit',
      textAlign: 'center',
      margin: 'auto',
      marginBottom: '1rem',
    },
  }));

  const classes = useStyles();

  return (
    <div className="info_adminshop">
      {shop ? (
        <div className="info-content">
          <div className="info-text">
            <p>Nom de l&apos;enseigne</p>
            <hr />
            <p>Personne à contacter</p>
            <hr />
            <p>E-mail</p>
            <hr />
            <p>Téléphone</p>
            <hr />
            <p>Adresse du siège social</p>
            <hr />
            <p>Site internet</p>
          </div>
          <hr />
          <div className="info-text">
            <p>{shopData.name}</p>
            <hr />
            <p>{shopInfo.contactPerson}</p>
            <hr />
            <p>{shopInfo.email}</p>
            <hr />
            <p>{shopInfo.phone}</p>
            <hr />
            <p>
              {shopInfo.headOfficeAddress}, {shopInfo.headOfficeZipcode}{' '}
              {shopInfo.headOfficeCity}, {shopInfo.headOfficeCountry}
            </p>
            <hr />
            <p>{shopData.website}</p>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
      <Link to="/contact">
        <Button className={classes.Button} variant="contained">
          Indiquer un changement
        </Button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shop: state.authShop.shop,
  };
};

export default connect(mapStateToProps, { loadShop })(AdminShopInfo);
