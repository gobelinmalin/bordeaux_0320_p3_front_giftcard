import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ButtonConnexion = ({ user }) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#231864',
      border: 0,
      borderRadius: 10,
      color: '#fff2ceff',
      height: '2rem',
      width: '30vw',
      padding: '12vh',
      fontWeight: '500',
      fontSize: '1.2rem',
      fontFamily: 'Montserrat',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(32,18,77,1)',
        backgroundColor: '#231864',
      },
      '& .MuiButton-label': {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      },
      '& .MuiButton-label i': {
        marginBottom: '0.5rem',
        fontSize: '2rem',
      },
    },
  });

  const classes = useStyles();

  return (
    <Link to={`/connexion/${user}`}>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        href="#"
        user={user}
      >
        {user === 'client' ? (
          <i className="fas fa-user" />
        ) : (
          <i className="fas fa-store-alt" />
        )}
        Espace {user}
      </Button>
    </Link>
  );
};

ButtonConnexion.defaultProps = {
  user: PropTypes.string,
};
ButtonConnexion.propTypes = {
  user: PropTypes.string,
};
export default ButtonConnexion;
