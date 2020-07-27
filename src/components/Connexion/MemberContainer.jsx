/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { register, clearErrors } from '../../actions/generalActions';

const MemberContainer = ({ register, isAuthenticated }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [civility, setCivility] = useState('');

  const handleChangeFirstname = (e) => setFirstname(e.target.value);
  const handleChangeLastname = (e) => setLastname(e.target.value);
  const handleChangeAddress = (e) => setAddress(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangeBirthdate = (e) => setBirthdate(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangePasswordConfirm = (e) => setPasswordConfirm(e.target.value);
  const handleChangeCivility = (e) => setCivility(e.target.value);
  const handleChangeZipcode = (e) => setZipcode(e.target.value);
  const handleChangeCity = (e) => setCity(e.target.value);
  const handleChangeCountry = (e) => setCountry(e.target.value);

  const createProfile = new Date();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const client = {
      civility,
      lastname,
      firstname,
      address,
      zipcode,
      city,
      country,
      phone,
      birthdate,
      createProfile,
      email,
      password,
    };
    register(client);
  };

  const useStyles = makeStyles(() => ({
    Button: {
      color: 'white',
      backgroundColor: '#231864',
      '&:hover': {
        background: '#231864',
      },
      borderRadius: '10px',
    },
    root: {
      '& > *': {
        margin: 'auto',
      },
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
      },
    },
  }));

  const classes = useStyles();
  const client = 'client';

  return (
    <div className="connexion">
      <h2>DEVENIR MEMBRE</h2>
      {isAuthenticated === false ? (
        <Redirect to={`/connexion/${client}`} />
      ) : (
        <>
          <form
            className={`${classes.root} member`}
            noValidate
            autoComplete="off"
          >
            <div className="memberform">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="label">Civilité</InputLabel>
                <Select
                  labelId="label"
                  value={civility}
                  onChange={handleChangeCivility}
                  label="Civilité"
                >
                  <MenuItem value="M.">M.</MenuItem>
                  <MenuItem value="Mme">Mme</MenuItem>
                </Select>
              </FormControl>
              <TextField
                id="login-name"
                label="Nom"
                variant="outlined"
                onChange={handleChangeLastname}
                style={{ width: 300 }}
              />
              <TextField
                id="login-firstname"
                label="Prénom"
                variant="outlined"
                onChange={handleChangeFirstname}
                style={{ width: 300 }}
              />
              <TextField
                id="login-adress"
                label="Adresse"
                variant="outlined"
                onChange={handleChangeAddress}
                style={{ width: 300 }}
              />
              <TextField
                id="login-zipcode"
                label="Code postal"
                variant="outlined"
                value={zipcode}
                onChange={handleChangeZipcode}
                style={{ width: 300 }}
              />
              <TextField
                id="login-city"
                label="Ville"
                variant="outlined"
                value={city}
                onChange={handleChangeCity}
                style={{ width: 300 }}
              />
            </div>
            <div className="memberform">
              <TextField
                id="login-country"
                label="Pays"
                variant="outlined"
                value={country}
                onChange={handleChangeCountry}
                style={{ width: 300 }}
              />
              <TextField
                id="login-phone"
                label="Téléphone"
                variant="outlined"
                onChange={handleChangePhone}
                style={{ width: 300 }}
              />
              <TextField
                id="login-date"
                label="birthdate"
                type="date"
                variant="outlined"
                onChange={handleChangeBirthdate}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: 300 }}
              />
              <TextField
                id="login-mail"
                label="E-mail"
                variant="outlined"
                onChange={handleChangeEmail}
                style={{ width: 300 }}
              />
              <TextField
                id="login-password"
                label="Mot de passe"
                variant="outlined"
                type="password"
                onChange={handleChangePassword}
                autoComplete="current-password"
                style={{ width: 300 }}
              />
              <TextField
                id="login-passwordcheck"
                label="Mot de passe"
                variant="outlined"
                type="password"
                onChange={handleChangePasswordConfirm}
                autoComplete="current-password"
                style={{ width: 300 }}
                helperText={
                  passwordConfirm.length > 0 ? (
                    <>
                      {password === passwordConfirm ? (
                        <div className="confirmpassword">
                          <i className="fas fa-check" />
                          <p>Mot de passe valide</p>
                        </div>
                      ) : (
                        <div className="confirmpassword">
                          <i className="fas fa-times" />
                          <p>Le mot de passe n&apos;est pas valide</p>
                        </div>
                      )}
                    </>
                  ) : (
                    'Confirmer votre mot de passe'
                  )
                }
              />
            </div>
          </form>
          <div className="confirmmember">
            <Button
              className={classes.Button}
              variant="contained"
              onClick={handleOnSubmit}
            >
              Confirmer
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
  };
};

export default connect(mapStateToProps, { register, clearErrors })(
  MemberContainer
);
