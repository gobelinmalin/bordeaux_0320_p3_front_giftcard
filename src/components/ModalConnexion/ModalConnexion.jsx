/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './ModalConnexion.css';
import PropTypes from 'prop-types';
import * as actionCreators from '../../actions/index';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function ModalConnexion({ isAuthenticated, step, setStep, login }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: '#20124d',
      border: 0,
      borderRadius: 10,
      color: '#fff2ceff',
      height: '2.5rem',
      padding: '1.5rem',
      fontWeight: '500',
      fontFamily: 'Montserrat',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(32,18,77,1)',
        backgroundColor: '#20124d',
      },
    },
    Button: {
      color: 'white',
      backgroundColor: '#231864',
      '&:hover': {
        background: '#231864',
      },
      borderRadius: '10px',
    },
    paper: {
      position: 'absolute',
      width: 1000,
      height: 700,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    other: {
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
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    if (isAuthenticated) {
      setStep('step2');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const client = { email, password };
    login(client);
    setStep('step2');
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {isAuthenticated && step === 'step2' ? (
        <Redirect to="/choix/e-carte/2" />
      ) : isAuthenticated ? (
        <Redirect to="/panier/informations" />
      ) : (
        <div className="ConnexionModal">
          <div className="connexion-container">
            <div className="connexion-bloc">
              <h4>Vous avez déjà un compte client ?</h4>
              <form className={classes.other} noValidate autoComplete="off">
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
                <Button
                  className={classes.Button}
                  variant="contained"
                  onClick={handleOnSubmit}
                >
                  Se connecter
                </Button>
              </div>
            </div>
            <div className="connexion-bloc">
              <h4>Vous n&apos;êtes pas encore client ?</h4>
              <Link to="/devenir-membre/client">
                <Button className={classes.Button} variant="contained">
                  Créer un compte
                </Button>
              </Link>
              <div className="NoAccountBtn">
                {step ? (
                  <Link
                    to="/choix/e-carte/2"
                    onClick={() => {
                      setStep('step2');
                    }}
                  >
                    <Button className={classes.Button} variant="contained">
                      Commander sans compte
                    </Button>
                  </Link>
                ) : (
                  <Link to="/panier/informations">
                    <Button className={classes.Button} variant="contained">
                      Commander sans compte
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        type="button"
        onClick={handleOpen}
      >
        Suivant
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    step: state.choice.step,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStep: (data) => dispatch(actionCreators.setStep(data)),
    login: (email, password) => dispatch(actionCreators.login(email, password)),
  };
};

ModalConnexion.propTypes = {
  isAuthenticated: PropTypes.bool,
  step: PropTypes.string,
  setStep: PropTypes.func,
  login: PropTypes.func,
};

ModalConnexion.defaultProps = {
  isAuthenticated: null,
  step: '',
  setStep: () => {},
  login: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalConnexion);
