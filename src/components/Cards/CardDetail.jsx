/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

const CardDetail = ({ shop }) => {
  const [onglets, setOnglets] = useState(1);
  const [cities, setCities] = useState([]);
  const goEnseigne = () => {
    setOnglets(1);
  };
  const goUtilisations = () => {
    setOnglets(2);
  };

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_LOCALHOST}/api/shops/${shop.id}/cities`)
      .then((res) => res.data)
      .then((results) => setCities(results))
      .catch((err) => {
        console.log(err);
      });
  }, [shop.id]);

  const allcities = cities.map((element) => element.name_city);

  return (
    <div className="card_enseigne">
      <h2>DETAILS SUR VOTRE PRODUIT</h2>
      <hr />
      <div className="contBtn">
        <button
          type="button"
          onClick={goEnseigne}
          className={`onglets ${onglets === 1 ? 'active' : ''}`}
        >
          ENSEIGNE
        </button>
        <button
          type="button"
          onClick={goUtilisations}
          className={`onglets round ${onglets === 2 ? 'active' : ''}`}
        >
          UTILISATIONS
        </button>
      </div>
      <div className="container-products">
        {onglets === 1 ? (
          <>
            <p>{shop.description}</p>
            {shop.online === 1 && (
              <div>
                <h4>Où trouver cette enseigne ?</h4>
                {allcities.length > 5 ? (
                  <a
                    href={`http://${shop.website}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {shop.website}
                  </a>
                ) : (
                  <p>{allcities.join(', ')}</p>
                )}
              </div>
            )}
            {shop.offline === 1 && allcities.length < 5 && (
              <a
                href={`http://${shop.website}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {shop.website}
              </a>
            )}
          </>
        ) : (
          <p>{shop.sale_conditions}</p>
        )}
      </div>
    </div>
  );
};

CardDetail.defaultProps = {
  shop: PropTypes.object,
};
CardDetail.propTypes = {
  shop: PropTypes.instanceOf(Object),
};

export default CardDetail;
