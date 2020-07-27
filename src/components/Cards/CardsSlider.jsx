import React from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../Home/CardProduct';

const CardSlider = ({ sameCards, infoProduct }) => {
  let unique;
  const getUniqueCard = (arr) => {
    unique = arr
      .map((e) => e.id)
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
  };
  getUniqueCard(sameCards);
  const getCardNotSame = unique.filter((card) => card.id !== infoProduct.id);

  return (
    <div className="samecards">
      {getCardNotSame.length > 0 && (
        <>
          <h2>CARTES SIMILAIRES</h2>
          <hr />
          <div className="contentsamecards">
            {getCardNotSame.slice(0, 5).map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

CardSlider.defaultProps = {
  sameCards: PropTypes.arrayOf(PropTypes.object),
  infoProduct: {},
};

CardSlider.propTypes = {
  sameCards: PropTypes.arrayOf(PropTypes.object),
  infoProduct: PropTypes.objectOf(PropTypes.any),
};

export default CardSlider;
