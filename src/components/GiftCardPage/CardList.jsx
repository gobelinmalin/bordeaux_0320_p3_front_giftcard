import React from 'react';
import './CardList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CardProduct from '../Home/CardProduct';

const CardList = (props) => {
  const { state } = props;
  return (
    <div className="FinalFilter">
      {state.finalArray.map((element) => (
        <CardProduct key={element.id} product={element} />
      ))}
    </div>
  );
};

CardList.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};

CardList.defaultProps = {
  state: [],
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(CardList);
