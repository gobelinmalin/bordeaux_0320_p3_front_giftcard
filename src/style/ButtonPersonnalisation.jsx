import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ButtonPersonnalisation = () => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#20124d',
      border: 0,
      borderRadius: 10,
      color: '#fff2ceff',
      height: '2rem',
      padding: '1rem',
      fontWeight: '500',
      fontFamily: 'Montserrat',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: '0px 0px 5px 0px rgba(32,18,77,1)',
        backgroundColor: '#20124d',
      },
    },
  });

  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.root}
      href="#"
    >
      Je personnalise !
    </Button>
  );
};

export default ButtonPersonnalisation;
