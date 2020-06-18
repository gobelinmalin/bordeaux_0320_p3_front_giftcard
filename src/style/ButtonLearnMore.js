import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ButtonLearnMore = () => {
    const useStyles = makeStyles({
        root: {
        backgroundColor: '#fff2ceff',
        border: 0,
        borderRadius: 10,
        color: '#20124d',
        height: '2rem',
        padding: '1rem',
        fontWeight: '500',
        fontSize: '0.8rem',
        fontFamily: 'Montserrat',
        boxShadow:'none',
        '&:hover': {
            boxShadow: ' 0px 0px 5px 0px rgba(255,242,206,1)',
            backgroundColor: '#fff2ceff',
        },
        },
    });

    const classes = useStyles();

    return (
        <Button variant="contained" color="primary" className={classes.root} href="#">
        En savoir plus
        </Button>
    )
};

export default ButtonLearnMore;