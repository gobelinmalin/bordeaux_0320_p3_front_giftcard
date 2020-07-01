import React, { useState } from 'react';
import '../../style/AdminShop.css';
import AdminShopInfo from './AdminShopInfo';
import AdminShopCard from './AdminShopCard';

const AdminShop = () => {
  const [onglets, setOnglets] = useState(1);

  const goInfo = () => {
    setOnglets(1);
  };
  const goCard = () => {
    setOnglets(2);
  };

  return (
    <div className="admin">
      <div className="contBtn">
        <button
          type="button"
          onClick={goInfo}
          className={`onglets round ${onglets === 1 ? 'active' : ''}`}
        >
          INFORMATIONS
        </button>
        <button
          type="button"
          onClick={goCard}
          className={`onglets round ${onglets === 2 ? 'active' : ''}`}
        >
          CARTES EN LIGNE
        </button>
      </div>
      <>{onglets === 1 ? <AdminShopInfo /> : <AdminShopCard />}</>
    </div>
  );
};

export default AdminShop;
