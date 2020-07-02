import React, { useEffect } from 'react';
import './CardList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import CardProduct from '../Home/CardProduct';
import * as actionCreators from '../../actions/index';

const CardList = (props) => {
  const { state, setFinalArray } = props;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/products`)
      .then((res) => setFinalArray(res.data));
  }, []);

  return (
    <div>
      {state.finalArray.length > 0 ? (
        <div className="FinalFilter">
          {state.finalArray.map((element) => (
            <CardProduct key={element.id} product={element} />
          ))}
        </div>
      ) : (
        <p className="FinalFilter">
          Aucune carte correspondante à votre recherche
        </p>
      )}
    </div>
  );
};

CardList.propTypes = {
  setFinalArray: PropTypes.func,
  state: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};

CardList.defaultProps = {
  state: [],
  setFinalArray: '',
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFinalArray: (array) => dispatch(actionCreators.setFinalArray(array)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
