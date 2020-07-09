import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../Home/CardProduct';

const CardSlider = ({ sameCards }) => {
  return (
    <div className="samecards">
      <h2>CARTES SIMILAIRES</h2>
      <hr />
      {sameCards.length > 0 &&
        sameCards
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
