import React from 'react';
import AdminShop from './AdminShop';
import ButtonLogout from '../../style/ButtonLogout';

const ShopArea = () => {
  return (
    <div className="connexion">
      <div className="profile-title">
        <h2>ESPACE ENSEIGNE</h2>
        <ButtonLogout />
      </div>
      <AdminShop />
    </div>
  );
};

export default ShopArea;
