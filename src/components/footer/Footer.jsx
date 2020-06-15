import React from 'react';
import Banner from './Banner/Banner';
import './Footer.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { borders } from '@material-ui/system';
import twitter from '../../image/LogoSocialNetwork/logo-footer-twitter.png'
import instagram from '../../image/LogoSocialNetwork/logo-footer-instagram.png'
import facebook from '../../image/LogoSocialNetwork/logo-footer-facebook.png'


const Footer = () => {
    const useStyles = makeStyles((theme) => ({
        Button: {
            color: 'white',
            backgroundColor: '#F28A2F',
            '&:hover': {
              background: "#F8C597",
            },
            borderRadius: '50px'
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
        }
        },
      }));
    const classes = useStyles();
    return (
        <React.Fragment>
            <Banner />
            <div className='Footer'>
                <div className='About'>
                    <ul>
                        <li><p><strong>A propos</strong></p></li>
                        <li><a href=''>Comment ça marche?</a></li>
                        <li><a href=''>Contact</a></li>
                        <li><a href=''>Conditions de ventes</a></li>
                        <li><a href=''>Politique de confidentialité</a></li>
                    </ul>
                    
                </div>
                <div className='Newsletter'>
                    <p><strong>Newsletter</strong></p>
                    <p>Inscrivez-vous à notre newsletter pour être informé de nos actualités !</p>
                    <form className={classes.root} noValidate autoComplete="off">
                    <div className='FirstnameLastnameInputs'>
                        <TextField id="outlined-basic" label="Nom" variant="outlined" style={{width: 210}}/>
                        <TextField id="outlined-basic" label="Prénom" variant="outlined" style={{width: 210}}/>
                    </div>
                        <TextField id="outlined-basic" label="Mail" variant="outlined" className={classes.TextField} />
                        
                    </form>
                    <div className='SubscribeBtn'>
                        <Button className={classes.Button} variant="contained">Je m'abonne</Button>
                    </div>
                    
                </div>
                <div className='SocialNetwork'>
                    <div className="vl"></div>
                    <div className='SocialNetworkContainer'>
                        <div className='SocialNetworkItem'>
                            <a href="https://facebook.com/">
                                <img className="IconSocialNetwork" src={twitter} alt="Social network Twitter icon" />
                            </a>
                            <p>Twitter</p>
                        </div>
                        <div className='SocialNetworkItem'>
                            <a href="https://facebook.com/">
                                <img className="IconSocialNetwork" src={facebook} alt="Social network Twitter icon" />
                            </a>
                            <p>Facebook</p>
                        </div>
                        <div className='SocialNetworkItem'>
                            <a href="https://facebook.com/">
                                <img className="IconSocialNetwork" src={instagram} alt="Social network Twitter icon" />
                            </a>
                            <p>Instagram</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </React.Fragment>
            

    )
}

export default Footer