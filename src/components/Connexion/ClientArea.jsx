import React from 'react';
import AdminClient from './AdminClient';
import ButtonLogout from '../../style/ButtonLogout';

const ClientArea = () => {
  return (
    <div className="connexion">
      <div className="profile-title">
        <h2>ESPACE CLIENT</h2>
        <ButtonLogout />
      </div>
      <AdminClient />
    </div>
  );
};

export default ClientArea;
