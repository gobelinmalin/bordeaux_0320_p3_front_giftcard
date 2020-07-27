/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CartTotal from '../Cart/CartTotal';
import { loadUser } from '../../actions/generalActions';

const EcardSendContainer = ({ loadUser, client, isAuthenticated }) => {
  useEffect(() => {
    loadUser(localStorage.getItem('token'));
  }, [loadUser]);

  const [dataClient, setDataClient] = useState({
    firstname: '',
    lastname: '',
    mail: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
  });

  const [form, setForm] = useState({
    deliveryDate: '',
    mail: '',
    firstname: '',
    lastname: '',
  });

  const [addressChoice, setAddressChoice] = useState(
    'Adresse mail du destinataire'
  );

  let clientInfo;
  if (client) {
    clientInfo = client.authdata.user[0];
  }

  const handleChange = (event) => {
    setAddressChoice(event.target.value);
  };

  useEffect(() => {
    if (client) {
      setDataClient({
        firstname: clientInfo.firstname,
        lastname: clientInfo.lastname,
        mail: clientInfo.email,
        address: clientInfo.address,
        zipcode: clientInfo.zipcode,
        city: clientInfo.city,
        country: clientInfo.country,
      });
    }
  }, [client, clientInfo]);

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
      '& .MuiInputBase-root.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.87)',
      },
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
    <div className="ecardchoice">
      <div className="ContactInformation">
        <h3>COORDONNEES</h3>
        <TextField
          disabled={isAuthenticated}
          className={classes.textField}
          id="login-name"
          label="Nom"
          variant="outlined"
          value={dataClient.lastname}
          onChange={(e) => {
            const { value } = e.target;
            setDataClient((prevState) => {
              return { ...prevState, lastname: value };
            });
          }}
          style={{ width: 300 }}
        />
        <TextField
          disabled={isAuthenticated}
          className={classes.textField}
          id="login-firstname"
          label="Prénom"
          variant="outlined"
          value={dataClient.firstname}
          onChange={(e) => {
            const { value } = e.target;
            setDataClient((prevState) => {
              return { ...prevState, firstname: value };
            });
          }}
          style={{ width: 300 }}
        />
        <h4>Adresse de facturation</h4>
        <TextField
          disabled={isAuthenticated}
          className={classes.textField}
          id="login-adress"
          label="Adresse"
          variant="outlined"
          value={dataClient.address}
          onChange={(e) => {
            const { value } = e.target;
            setDataClient((prevState) => {
              return { ...prevState, address: value };
            });
          }}
          style={{ width: 300 }}
        />
        <TextField
          disabled={isAuthenticated}
          className={classes.textField}
          id="login-zipcode"
          label="Code postal"
          variant="outlined"
          value={dataClient.zipcode}
          onChange={(e) => {
            const { value } = e.target;
            setDataClient((prevState) => {
              return { ...prevState, zipcode: value };
            });
          }}
          style={{ width: 300 }}
        />
        <TextField
          disabled={isAuthenticated}
          className={classes.textField}
          id="login-city"
          label="Ville"
          variant="outlined"
          value={dataClient.city}
          onChange={(e) => {
            const { value } = e.target;
            setDataClient((prevState) => {
              return { ...prevState, city: value };
            });
          }}
          style={{ width: 300 }}
        />
        <TextField
          disabled={isAuthenticated}
          className={classes.textField}
          id="login-country"
          label="Pays"
          variant="outlined"
          value={dataClient.country}
          onChange={(e) => {
            const { value } = e.target;
            setDataClient((prevState) => {
              return { ...prevState, country: value };
            });
          }}
          style={{ width: 300 }}
        />
      </div>
      <div className="ContactInformation">
        <h3>EXPEDITION</h3>
        <TextField
          id="login-date"
          label="Date d'envoi souhaité"
          type="date"
          variant="outlined"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          style={{ width: 300 }}
        />
        <h4>Adresse mail de réception</h4>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={addressChoice}
          onChange={handleChange}
          className={classes.formControl}
        >
          <FormControlLabel
            value="Mon adresse mail"
            control={<Radio />}
            label="Mon adresse mail"
          />
          <FormControlLabel
            value="Adresse mail du destinataire"
            control={<Radio />}
            label="Adresse mail du destinataire"
          />
        </RadioGroup>
        <div className="TotalForm">
          <div className="FormFirstPart">
            <TextField
              disabled={isAuthenticated}
              className={
                addressChoice === 'Adresse mail du destinataire'
                  ? [classes.noForm, classes.textField].join(' ')
                  : classes.textField
              }
              id="login-mail"
              label="E-mail"
              variant="outlined"
              value={dataClient.mail}
              onChange={(e) => {
                const { value } = e.target;
                setDataClient((prevState) => {
                  return { ...prevState, mail: value };
                });
              }}
              style={{ width: 300 }}
            />
            <TextField
              className={
                addressChoice === 'Mon adresse mail'
                  ? [classes.noForm, classes.textField].join(' ')
                  : classes.textField
              }
              id="login-lastname2"
              label="Nom"
              variant="outlined"
              value={form.lastname}
              style={{ width: 300 }}
              onChange={(e) => {
                const { value } = e.target;
                setForm((prevState) => {
                  return { ...prevState, lastname: value };
                });
              }}
            />
            <TextField
              className={
                addressChoice === 'Mon adresse mail'
                  ? [classes.noForm, classes.textField].join(' ')
                  : classes.textField
              }
              id="login-firstname2"
              label="Prénom"
              variant="outlined"
              value={form.firstname}
              style={{ width: 300 }}
              onChange={(e) => {
                const { value } = e.target;
                setForm((prevState) => {
                  return { ...prevState, firstname: value };
                });
              }}
            />
            <TextField
              className={
                addressChoice === 'Mon adresse mail'
                  ? [classes.noForm, classes.textField].join(' ')
                  : classes.textField
              }
              id="login-mail2"
              label="E-mail"
              variant="outlined"
              value={form.mail}
              style={{ width: 300 }}
              onChange={(e) => {
                const { value } = e.target;
                setForm((prevState) => {
                  return { ...prevState, mail: value };
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="CartTotalContainer">
        <CartTotal />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    client: state.auth.user,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

EcardSendContainer.propTypes = {
  client: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  isAuthenticated: PropTypes.bool,
  loadUser: PropTypes.func,
};

EcardSendContainer.defaultProps = {
  client: [],
  isAuthenticated: false,
  loadUser: () => {},
};

export default connect(mapStateToProps, { loadUser })(EcardSendContainer);
