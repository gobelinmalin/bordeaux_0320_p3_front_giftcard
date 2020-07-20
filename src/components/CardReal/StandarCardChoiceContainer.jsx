import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StandardCardMessage from './StandardCardMessage';
import StandardCardChoice from './StandardCardChoice';
import * as actionCreators from '../../actions/index';

const StandardCardChoiceContainer = ({ addToCart, choice }) => {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: '#20124d',
      border: 0,
      borderRadius: 10,
      color: '#fff2ceff',
      height: '2.5rem',
      padding: '1.5rem',
      fontWeight: '500',
      fontFamily: 'Montserrat',
      margin: 'auto',
      marginTop: '3rem',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(32,18,77,1)',
        backgroundColor: '#20124d',
      },
    },
  }));

  const classes = useStyles();
  return (
    <div className="ecardstepchoice">
      <div className="ecardchoice">
        <StandardCardChoice />
        <hr />
        <StandardCardMessage />
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        type="button"
        onClick={() => addToCart(choice)}
      >
        Ajouter au panier
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    choice: state.choice.choice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(actionCreators.addToCart(item)),
  };
};

StandardCardChoiceContainer.propTypes = {
  addToCart: PropTypes.func,
  choice: PropTypes.instanceOf(Object),
};

StandardCardChoiceContainer.defaultProps = {
  addToCart: () => {},
  choice: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandardCardChoiceContainer);
