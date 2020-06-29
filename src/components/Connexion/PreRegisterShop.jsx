import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const MemberContainer = ({ match }) => {
    const { user } = match.params;
    const [shop, setShop] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [siren, setSiren] = useState('');
    const [format, setFormat] = useState(''); // type d'enseigne
    const [category, setCategory] = useState(''); // categorie (sport, beauté...)
    

    const handleChangeShop = (e) => setShop(e.target.value);
    const handleChangeContactPerson = (e) => setContactPerson(e.target.value);
    const handleChangePhone = (e) => setPhone(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangeWebsite = (e) => setWebsite(e.target.value);
    const handleChangeAddress = (e) => setAddress(e.target.value);
    const handleChangeZipcode = (e) => setZipcode(e.target.value);
    const handleChangeCity = (e) => setCity(e.target.value);
    const handleChangeCountry = (e) => setCountry(e.target.value);
    const handleChangeSiren = (e) => setSiren(e.target.value);
    const handleChangeFormat = (e) => setFormat(e.target.value);
    const handleChangeCategory = (e) => setCategory(e.target.value);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const client = {shop, contactPerson, phone, email, website, address, zipcode, city, country, siren, format, category};

    };

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
            margin: 'auto',
          },
          '& label.Mui-focused': {
            color: '#F28A2F',
          },
    
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#F28A2F',
            },
          },
          '& .MuiFormControl-root': {
              margin: '0.6rem'
          },
        },
      }));

    const classes = useStyles();

    return (
        <div className='connexion'>
            <h2>PRE-INSCRIPTION</h2>
            <form className={`${classes.root} inscription`} noValidate autoComplete="off">
                <div className='memberform'>
                    <TextField
                        id="login-shop"
                        label="Enseigne"
                        variant="outlined"
                        onChange={handleChangeShop}
                        style={{ width: 300 }}
                    />
                    <TextField
                        id="login-contact"
                        label="Personne à contacter"
                        variant="outlined"
                        onChange={handleChangeContactPerson}
                        style={{ width: 300 }}
                    />
                    <TextField
                        id="login-phone"
                        label="Téléphone"
                        variant="outlined"
                        onChange={handleChangePhone}
                        style={{ width: 300 }}
                    />
                    <TextField
                        id="login-mail"
                        label="E-mail"
                        variant="outlined"
                        onChange={handleChangeEmail}
                        style={{ width: 300 }}
                    />
                    <TextField
                            id="login-website"
                            label="Site internet"
                            variant="outlined"
                            value={website}
                            onChange={handleChangeWebsite}
                            style={{ width: 300 }}
                    />
                    <TextField
                        id="login-siren"
                        label="SIREN"
                        variant="outlined"
                        onChange={handleChangeSiren}
                        style={{ width: 300 }}
                    />
                </div>
                <div className='memberform'>
                    <TextField
                            id="login-adress"
                            label="Adresse"
                            variant="outlined"
                            onChange={handleChangeAddress}
                            style={{ width: 300 }}
                    />
                    <TextField
                        id="login-zipcode"
                        label="Code postal"
                        variant="outlined"
                        value={zipcode}
                        onChange={handleChangeZipcode}
                        style={{ width: 300 }}
                    />
                    <TextField
                        id="login-city"
                        label="Ville"
                        variant="outlined"
                        value={city}
                        onChange={handleChangeCity}
                        style={{ width: 300 }}
                    />
                    <TextField
                        id="login-country"
                        label="Pays"
                        variant="outlined"
                        value={country}
                        onChange={handleChangeCountry}
                        style={{ width: 300 }}
                    />
                    <TextField
                        id="login-format"
                        label="Type d'enseigne"
                        variant="outlined"
                        onChange={handleChangeFormat}
                        style={{ width: 300 }}
                    />
                    <TextField
                        id="login-category"
                        label="Catégorie"
                        variant="outlined"
                        onChange={handleChangeCategory}
                        style={{ width: 300 }}
                    />
                </div>
            </form>
            <div className="confirmmember">
                <Button className={classes.Button} variant="contained" onClick={handleOnSubmit}>
                    Confirmer
                </Button>
            </div>
        </div>
    )
};

export default MemberContainer;