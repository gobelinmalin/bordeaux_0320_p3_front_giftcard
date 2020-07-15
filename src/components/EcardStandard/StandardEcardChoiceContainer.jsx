import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import StandardEcardChoice from './StandardEcardChoice';
import StandardEcardMessage from './StandardEcardMessage';

const StandardEcardChoiceContainer = () => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: '#20124d',
      border: 0,
      borderRadius: 10,
      margin: 'auto',
      color: '#fff2ceff',
      height: '2rem',
      padding: '1rem',
      marginTop: '2rem',
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
    <div className="ecardstepchoice">
      <div className="ecardchoice">
        <StandardEcardChoice />
        <img src="#" alt="carte choisie" />
        <hr />
        <StandardEcardMessage />
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.root}
        href="#"
      >
        Suivant
      </Button>
    </div>
  );
};

export default StandardEcardChoiceContainer;
