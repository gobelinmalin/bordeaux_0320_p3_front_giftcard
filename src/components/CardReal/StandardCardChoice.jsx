/* eslint-disable react/no-array-index-key */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../actions/index';

const StandardcardChoice = (props) => {
  const { choiceClient } = props;

  const useStyles = makeStyles({
    textField: {
      '& label.Mui-focused': {
        color: '#F28A2F',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#F28A2F',
        },
      },
      margin: '1rem 0',
      marginRight: '0.5rem',
    },
    formControl: {
      color: 'rgba(0, 0, 0, 0.54)',
      '& .MuiIconButton-colorSecondary': {
        color: '#F28A2F',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#F28A2F',
      },
      '& .MuiFormControlLabel-root': {
        marginRight: '1rem',
      },
      '& .MuiRadio-root': {
        color: '#F28A2F',
      },
    },
    noForm: {
      display: 'none',
    },
  });
  const classes = useStyles();

  return (
    <div className="standardecardchoice">
      <h3>CHOIX</h3>
      <div className="allchoices">
        <div className="formchoice">
          <TextField
            className={classes.textField}
            disabled
            id="montant"
            variant="outlined"
            value={`${choiceClient.price}€`}
            style={{ width: 300 }}
            label="Montant"
          />
          <TextField
            disabled
            className={classes.textField}
            id="type"
            variant="outlined"
            value="Carte physique"
            style={{ width: 300 }}
            label="Type de carte"
          />
        </div>
        <img src={choiceClient.image} alt="carte choisie" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    choiceClient: state.choice.choice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardChoice: (data) => dispatch(actionCreators.cardChoice(data)),
  };
};

StandardcardChoice.defaultProps = {
  choiceClient: {},
};

StandardcardChoice.propTypes = {
  choiceClient: PropTypes.instanceOf(Object),
};

export default connect(mapStateToProps, mapDispatchToProps)(StandardcardChoice);
