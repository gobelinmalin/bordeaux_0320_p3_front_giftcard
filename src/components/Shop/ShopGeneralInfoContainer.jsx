import React from 'react';
import Proptypes from 'prop-types';
import ShopGeneralInfo from './ShopGeneralInfo';
import '../../style/ShopGeneralInfoContainer.css';

const ShopGeneralInfoContainer = ({ information }) => {
  return (
    <div className="shop-container">
      <ShopGeneralInfo shop={information[0]} />
    </div>
  );
};

ShopGeneralInfoContainer.defaultProps = {
  information: Proptypes.arrayOf(Proptypes.object),
};
ShopGeneralInfoContainer.propTypes = {
  information: Proptypes.arrayOf(Proptypes.object),
};
export default ShopGeneralInfoContainer;
