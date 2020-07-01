import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { logout } from '../actions/generalActions';

const ButtonLogout = ({ logout }) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#231864',
      border: 0,
      borderRadius: 10,
      textDecoration: 'none',
      color: '#fff',
      height: '2rem',
      padding: '1rem',
      fontWeight: '500',
      fontFamily: 'Montserrat',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(32,18,77,1)',
        backgroundColor: '#231864',
      },
    },
  });

  const classes = useStyles();

  return (
    <Link to="/connexion">
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        href="#"
        onClick={logout}
      >
        Déconnexion
      </Button>
    </Link>
  );
};

export default connect(null, { logout })(ButtonLogout);
