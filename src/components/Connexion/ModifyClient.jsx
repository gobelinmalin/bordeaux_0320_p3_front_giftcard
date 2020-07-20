/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateUser, login } from '../../actions/generalActions';
import '../../style/Modify.css';

const ModifyClient = ({ updateUser, login, client, history }) => {
  const [civility, setCivility] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [createProfile, setCreateProfile] = useState('');
  const handleChangeFirstname = (e) => setFirstname(e.target.value);
  const handleChangeLastname = (e) => setLastname(e.target.value);
  const handleChangeAddress = (e) => setAddress(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangeBirthdate = (e) => setBirthdate(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeCivility = (e) => setCivility(e.target.value);
  const handleChangeZipcode = (e) => setZipcode(e.target.value);
  const handleChangeCity = (e) => setCity(e.target.value);
  const handleChangeCountry = (e) => setCountry(e.target.value);

  let clientInfo;
  let id;
  let birth;
  let date;
  let month;
  let year;
  let allbirth;
  if (client) {
    clientInfo = client.authdata.user[0];
    id = clientInfo.id;
    birth = new Date(birthdate);
    date = birth.getDate();
    month = birth.getMonth() + 1;
    if (month < 10) month = `0${birth.getMonth() + 1}`;
    if (date < 10) date = `0${birth.getDate()}`;
    year = birth.getFullYear();
    allbirth = `${year}-${month}-${date}`;
  }

  useEffect(() => {
    if (client) {
      setCivility(clientInfo.civility);
      setFirstname(clientInfo.firstname);
      setLastname(clientInfo.lastname);
      setAddress(clientInfo.address);
      setZipcode(clientInfo.zipcode);
      setCity(clientInfo.city);
      setCountry(clientInfo.country);
      setPhone(clientInfo.phone);
      setBirthdate(clientInfo.birthdate);
      setEmail(clientInfo.email);
      setPassword(clientInfo.password);
      setCreateProfile(clientInfo.createProfile);
    }
  }, [client, clientInfo]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const clientNewInfo = {
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
    updateUser(id, clientNewInfo);
    const identity = { email, password };
    login(identity);
    history.push(`/connexion/client`);
  };

  const useStyles = makeStyles({
    ButtonConfirm: {
      backgroundColor: '#fadb11',
      border: 0,
      borderRadius: 10,
      textDecoration: 'none',
      color: '#231864',
      height: '2rem',
      padding: '1rem',
      fontWeight: '500',
      fontFamily: 'Montserrat',
      boxShadow: 'none',
      margin: 'auto',
      marginBottom: '2rem',
      '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(32,18,77,1)',
        backgroundColor: '#fadb11',
      },
    },
    textField: {
      '& label.Mui-focused': {
        color: '#F28A2F',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#F28A2F',
        },
      },
      margin: '1rem',
    },
  });

  const classes = useStyles();

  return (
    <div className="modifycontainer">
      <h2>MODIFIER MES INFORMATIONS</h2>
      {client ? (
        <>
          <form
            className={`{classes.textField} modifyform`}
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
                value={lastname}
                onChange={handleChangeLastname}
                style={{ width: 300 }}
              />
              <TextField
                id="login-firstname"
                label="Prénom"
                variant="outlined"
                value={firstname}
                onChange={handleChangeFirstname}
                style={{ width: 300 }}
              />
              <TextField
                id="login-adress"
                label="Adresse"
                variant="outlined"
                value={address}
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
              <TextField
                id="login-country"
                label="Pays"
                variant="outlined"
                value={country}
                onChange={handleChangeCountry}
                style={{ width: 300 }}
              />
            </div>
            <div className="memberform">
              <TextField
                id="login-phone"
                label="Téléphone"
                variant="outlined"
                value={phone}
                onChange={handleChangePhone}
                style={{ width: 300 }}
              />
              <TextField
                id="login-date"
                label="birthdate"
                type="date"
                value={allbirth}
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
                value={email}
                onChange={handleChangeEmail}
                style={{ width: 300 }}
              />
            </div>
          </form>
          <div className="buttons-modify">
            <Button
              variant="contained"
              color="primary"
              className={classes.ButtonConfirm}
              onClick={() => history.goBack()}
            >
              Retour
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.ButtonConfirm}
              onClick={(e) => handleOnSubmit(e)}
            >
              Confirmer
            </Button>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    client: state.auth.user,
  };
};

export default connect(mapStateToProps, { updateUser, login })(
  withRouter(ModifyClient)
);
