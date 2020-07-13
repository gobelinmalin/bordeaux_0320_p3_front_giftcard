import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../Home/CardProduct';

const CardSlider = ({ sameCards }) => {
  let unique;
  const getUniqueCard = (arr, comp) => {
    unique = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
  };

  getUniqueCard(sameCards, 'id');

  return (
    <div className="samecards">
      <h2>CARTES SIMILAIRES</h2>
      <hr />
      {unique.length > 0 &&
        unique
          .slice(0, 5)
          .map((product) => <CardProduct key={product.id} product={product} />)}
    </div>
  );
};

CardSlider.defaultProps = {
  sameCards: PropTypes.arrayOf(PropTypes.object),
};

CardSlider.propTypes = {
  sameCards: PropTypes.arrayOf(PropTypes.object),
};

export default CardSlider;
