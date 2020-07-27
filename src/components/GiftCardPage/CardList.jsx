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
      .then((res) => res.data)
      .then((data) => setFinalArray(data));
  }, [setFinalArray]);

  let unique;
  const getUniqueCard = (arr, comp) => {
    unique = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);
  };

  getUniqueCard(state.finalArray, 'id');

  return (
    <div>
      {state.finalArray && state.finalArray.length > 0 ? (
        <div className="FinalFilter">
          {unique.map((element) => (
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
  state: PropTypes.objectOf(PropTypes.any),
};

CardList.defaultProps = {
  state: [],
  setFinalArray: '',
};

const mapStateToProps = (state) => {
  return {
    state: state.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFinalArray: (array) => dispatch(actionCreators.setFinalArray(array)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
