import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShopList = () => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/shops`)
      .then((res) => res.data)
      .then((data) => setShops(data));
  }, []);

  return (
    <div className="shoplist-container">
      {shops.map((shop) => (
        <Link
          to={`/enseignes/${shop.id}`}
          className="shoplist-button"
          key={shop.id}
        >
          <img className="shoplist-logo" src={shop.logo} alt={shop.name} />
        </Link>
      ))}
    </div>
  );
};

export default ShopList;
