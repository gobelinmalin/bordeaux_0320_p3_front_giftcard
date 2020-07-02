/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { login, loginShop, clearErrors } from '../../actions/generalActions';

const Connexion = ({ match, login, loginShop, isAuthenticated }) => {
  const { user } = match.params;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const useStyles = makeStyles((theme) => ({
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
        margin: theme.spacing(1),
        width: '50ch',
      },
      '& label.Mui-focused': {
        color: '#F28A2F',
      },

      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#F28A2F',
        },
      },
    },
  }));

  const classes = useStyles();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const client = { email, password };
    login(client);
  };

  const handleOnSubmitShop = (e) => {
    e.preventDefault();
    const shop = { email, password };
    loginShop(shop);
  };

  return (
    <div className="connexion">
      <h2>CONNEXION</h2>
      {isAuthenticated ? (
        <Redirect
          to={`/mon-compte-${user}`}
          email={email}
          password={password}
        />
      ) : (
        <div className="connexion-container">
          <div className="connexion-bloc">
            <h4>Vous avez déjà un compte {user} ?</h4>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="login-email"
                label="E-mail"
                variant="outlined"
                onChange={handleChangeEmail}
                style={{ width: 300 }}
              />
              <TextField
                id="login-password"
                label="Mot de passe"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={handleChangePassword}
                style={{ width: 300 }}
              />
            </form>
            <div className="SubscribeBtn">
              {user === 'client' ? (
                <Button
                  className={classes.Button}
                  variant="contained"
                  onClick={handleOnSubmit}
                >
                  Se connecter
                </Button>
              ) : (
                <Button
                  className={classes.Button}
                  variant="contained"
                  onClick={handleOnSubmitShop}
                >
                  Se connecter
                </Button>
              )}
            </div>
          </div>
          <div className="connexion-bloc">
            {user === 'client' ? (
              <>
                <h4>Vous n&apos;êtes pas encore {user} ?</h4>
                <Link to="/devenir-membre/client">
                  <Button className={classes.Button} variant="contained">
                    Créer un compte
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <h4>Vous souhaitez inscrire votre {user} ?</h4>
                <Link to="/pre-inscription/enseigne">
                  <Button className={classes.Button} variant="contained">
                    Pré-inscription
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
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

export default connect(mapStateToProps, { login, loginShop, clearErrors })(
  Connexion
);
