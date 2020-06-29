import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, Link } from "react-router-dom";

const ButtonModify = ({match}) => {
    const { user } = match.params;
    const useStyles = makeStyles({
        Button: {
            backgroundColor: '#fadb11',
            border: 0,
            borderRadius: 10,
            textDecoration: 'none',
            color: '#231864',
            height: '2rem',
            padding: '1rem',
            fontWeight: '500',
            fontFamily: 'Montserrat',
            boxShadow:'none',
            margin: 'auto',
            marginRight: '1rem',
            '&:hover': {
                boxShadow: '0px 0px 5px 0px rgba(32,18,77,1)',
                backgroundColor: '#fadb11',
            }
        }
    });

    const classes = useStyles();

    return (
        <Link to={`/modifier-mon-compte/${user}`}>
            <Button variant="contained" color="primary" className={classes.Button}>
                    Modifier
            </Button>
        </Link>
    )
};

export default (withRouter(ButtonModify));