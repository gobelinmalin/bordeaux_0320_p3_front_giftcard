/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
import './CartContainer.css';
import { connect } from 'react-redux';
import './CartContainerStep2.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import { loadUser } from '../../actions/generalActions';
import CartTotal from './CartTotal';

const CartContainerStep2 = (props) => {
  const { client, email, password, isAuthenticated } = props;

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [addressChoice, setAddressChoice] = useState('Adresse du destinataire');

  const [form, setForm] = useState({
    deliveryDate: '',
    adresse: '',
    zipcode: '',
    city: '',
    country: '',
    firstname: '',
    lastname: '',
  });

  const handleChangeFirstname = (e) => setFirstname(e.target.value);
  const handleChangeLastname = (e) => setLastname(e.target.value);
  const handleChangeAddress = (e) => setAddress(e.target.value);
  const handleChangeZipcode = (e) => setZipcode(e.target.value);
  const handleChangeCity = (e) => setCity(e.target.value);
  const handleChangeCountry = (e) => setCountry(e.target.value);

  useEffect(() => {
    loadUser(email, password);
  }, [email, password]);

  let clientInfo;
  if (client) {
    clientInfo = client.authdata.user[0];
  }

  useEffect(() => {
    if (client) {
      setFirstname(clientInfo.firstname);
      setLastname(clientInfo.lastname);
      setAddress(clientInfo.address);
      setZipcode(clientInfo.zipcode);
      setCity(clientInfo.city);
      setCountry(clientInfo.country);
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

  const handleChange = (event) => {
    setAddressChoice(event.target.value);
  };

  return (
    <div className="CartInformation">
      <h2>VOTRE PANIER</h2>
      <div className="InformationContainer">
        <div className="ContactInformation">
          <h3>COORDONNEES</h3>
          <TextField
            disabled={isAuthenticated}
            className={classes.textField}
            id="login-name"
            label="Nom"
            variant="outlined"
            value={lastname}
            onChange={handleChangeLastname}
            style={{ width: 300 }}
          />
          <TextField
            disabled={isAuthenticated}
            className={classes.textField}
            id="login-firstname"
            label="Prénom"
            variant="outlined"
            value={firstname}
            onChange={handleChangeFirstname}
            style={{ width: 300 }}
          />
          <h4>Adresse de facturation</h4>
          <TextField
            disabled={isAuthenticated}
            className={classes.textField}
            id="login-adress"
            label="Adresse"
            variant="outlined"
            value={address}
            onChange={handleChangeAddress}
            style={{ width: 300 }}
          />
          <TextField
            disabled={isAuthenticated}
            className={classes.textField}
            id="login-zipcode"
            label="Code postal"
            variant="outlined"
            value={zipcode}
            onChange={handleChangeZipcode}
            style={{ width: 300 }}
          />
          <TextField
            disabled={isAuthenticated}
            className={classes.textField}
            id="login-city"
            label="Ville"
            variant="outlined"
            value={city}
            onChange={handleChangeCity}
            style={{ width: 300 }}
          />
          <TextField
            disabled={isAuthenticated}
            className={classes.textField}
            id="login-country"
            label="Pays"
            variant="outlined"
            value={country}
            onChange={handleChangeCountry}
            style={{ width: 300 }}
          />
        </div>
        <div className="DeliveryInformation">
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
          <h4>Adresse de livraison</h4>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={addressChoice}
            onChange={handleChange}
            className={classes.formControl}
          >
            <FormControlLabel
              value="Mon adresse"
              control={<Radio />}
              label="Mon adresse"
            />
            <FormControlLabel
              value="Adresse du destinataire"
              control={<Radio />}
              label="Adresse du destinataire"
            />
          </RadioGroup>
          <div className="TotalForm">
            <div className="FormFirstPart">
              <TextField
                className={
                  addressChoice === 'Mon adresse'
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
                  addressChoice === 'Mon adresse'
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
                  addressChoice === 'Mon adresse'
                    ? [classes.noForm, classes.textField].join(' ')
                    : classes.textField
                }
                id="login-adress"
                label="Adresse"
                variant="outlined"
                value={form.adresse}
                style={{ width: 300 }}
                onChange={(e) => {
                  const { value } = e.target;
                  setForm((prevState) => {
                    return { ...prevState, adresse: value };
                  });
                }}
              />
            </div>
            <div className="FormSecondPart">
              <TextField
                className={
                  addressChoice === 'Mon adresse'
                    ? [classes.noForm, classes.textField].join(' ')
                    : classes.textField
                }
                id="login-zipcode"
                label="Code postal"
                variant="outlined"
                value={form.zipcode}
                style={{ width: 300 }}
                onChange={(e) => {
                  const { value } = e.target;
                  setForm((prevState) => {
                    return { ...prevState, zipcode: value };
                  });
                }}
              />
              <TextField
                className={
                  addressChoice === 'Mon adresse'
                    ? [classes.noForm, classes.textField].join(' ')
                    : classes.textField
                }
                id="login-city"
                label="Ville"
                variant="outlined"
                value={form.city}
                style={{ width: 300 }}
                onChange={(e) => {
                  const { value } = e.target;
                  setForm((prevState) => {
                    return { ...prevState, city: value };
                  });
                }}
              />
              <TextField
                className={
                  addressChoice === 'Mon adresse'
                    ? [classes.noForm, classes.textField].join(' ')
                    : classes.textField
                }
                id="login-country"
                label="Pays"
                variant="outlined"
                value={form.country}
                style={{ width: 300 }}
                onChange={(e) => {
                  const { value } = e.target;
                  setForm((prevState) => {
                    return { ...prevState, country: value };
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

CartContainerStep2.propTypes = {
  client: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  email: PropTypes.string,
  password: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

CartContainerStep2.defaultProps = {
  client: '',
  email: '',
  password: '',
  isAuthenticated: '',
};

export default connect(mapStateToProps, { loadUser })(CartContainerStep2);
