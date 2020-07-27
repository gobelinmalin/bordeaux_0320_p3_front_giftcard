import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../actions/index';

const StandardCardMessage = (props) => {
  const { choiceClient, cardChoice } = props;

  const [checked, setChecked] = React.useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    const { value } = e.target;
    cardChoice({ ...choiceClient, message: value });
  };

  // add choice to the reducer
  const handleChangeMsg = (e) => {
    const { value } = e.target;
    cardChoice({ ...choiceClient, message: value });
  };

  const useStyles = makeStyles(() => ({
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
      width: '100%',
      marginBottom: '1rem',
      '& label.Mui-focused': {
        color: '#F28A2F',
      },

      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#F28A2F',
        },
      },
      '& .MuiFormControl-root': {
        margin: '0.6rem',
        width: '100%',
      },
      '& .MuiIconButton-colorSecondary': {
        color: '#F28A2F',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#F28A2F',
      },
      '& .MuiFormControlLabel-root': {
        marginRight: '1rem',
        width: 'auto',
      },
      '& .MuiRadio-root': {
        color: '#F28A2F',
      },
    },
    noForm: {
      display: 'none',
    },
  }));

  const classes = useStyles();

  return (
    <div className="standardecardmessage">
      <h3>MESSAGE</h3>
      <FormControlLabel
        className={classes.formControl}
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="pas de message"
          />
        }
        label="Pas de message"
      />
      <TextField
        className={
          checked
            ? [classes.noForm, classes.textField].join(' ')
            : classes.textField
        }
        placeholder="Votre message..."
        value={choiceClient.message}
        multiline
        onChange={(e) => handleChangeMsg(e)}
        rows={6}
        variant="outlined"
        style={{ width: '80%' }}
      />
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

StandardCardMessage.defaultProps = {
  choiceClient: {},
  cardChoice: () => {},
};

StandardCardMessage.propTypes = {
  choiceClient: PropTypes.instanceOf(Object),
  cardChoice: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandardCardMessage);
