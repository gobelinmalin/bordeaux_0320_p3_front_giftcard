import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = (props) => {
  const { image } = props;
  return (
    <div className="Icon">
      {/* <img src={require(`../../image/${image}.png`)} alt="icon" /> */}
      <img src={image} alt="icon" />
    </div>
  );
};

Icon.defaultProps = {
  image: PropTypes.string,
};
Icon.propTypes = {
  image: PropTypes.string,
};

export default Icon;
