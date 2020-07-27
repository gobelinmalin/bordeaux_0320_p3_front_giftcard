import React from 'react';
import './Footer.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Banner from './Banner/Banner';

const Footer = () => {
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
  return (
    <>
      <Banner />
      <div className="Footer">
        <div className="About">
          <ul>
            <p>
              <strong>Informations</strong>
            </p>
            <li>
              <a href="/">Comment ça marche?</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/">Conditions de ventes</a>
            </li>
            <li>
              <a href="/">Politique de confidentialité</a>
            </li>
          </ul>
        </div>
        <div className="Newsletter">
          <p>
            <strong>Newsletter</strong>
          </p>
          <p>
            Inscrivez-vous à notre newsletter pour être informé de nos
            actualités !
          </p>
          <form className={classes.root} noValidate autoComplete="off">
            <div className="FirstnameLastnameInputs">
              <TextField
                id="newsletter-name"
                label="Nom"
                variant="outlined"
                style={{ width: 210 }}
              />
              <TextField
                id="newsletter-firstname"
                label="Prénom"
                variant="outlined"
                style={{ width: 210 }}
              />
            </div>
            <TextField
              id="newsletter-mail"
              label="Mail"
              variant="outlined"
              className={classes.TextField}
            />
          </form>
          <div className="SubscribeBtn">
            <Button className={classes.Button} variant="contained">
              Je m&apos;abonne
            </Button>
          </div>
        </div>
        <div className="SocialNetwork">
          <div className="vl" />
          <div className="SocialNetworkContainer">
            <div className="SocialNetworkItem">
              <i className="fab fa-twitter IconSocialNetwork" />
              <p>Twitter</p>
            </div>
            <div className="SocialNetworkItem">
              <i className="fab fa-facebook-f IconSocialNetwork" />
              <p>Facebook</p>
            </div>
            <div className="SocialNetworkItem">
              <i className="fab fa-instagram IconSocialNetwork" />
              <p>Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
