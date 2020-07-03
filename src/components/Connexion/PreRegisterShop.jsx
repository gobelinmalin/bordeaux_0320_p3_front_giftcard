/* eslint-disable object-shorthand */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';

const MemberContainer = () => {
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
  const [desc, setDesc] = useState('');
  const [gyl, setGyl] = useState('');
  const [format, setFormat] = useState(''); // type d'enseigne
  const [type, setType] = useState(''); // cartes ou abonnements
  const [category, setCategory] = useState([]); // thème (sport, beauté...)
  const [allcat, setAllcat] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/api/themes`)
      .then((res) => res.data)
      .then((data) => setAllcat(data));
  }, []);

  const handleChangeShop = (e) => setShop(e.target.value);
  const handleChangeContactPerson = (e) => setContactPerson(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeWebsite = (e) => setWebsite(e.target.value);
  const handleChangeAddress = (e) => setAddress(e.target.value);
  const handleChangeZipcode = (e) => setZipcode(e.target.value);
  const handleChangeCity = (e) => setCity(e.target.value);
  const handleChangeCountry = (e) => setCountry(e.target.value);
  const handleChangeDesc = (e) => setDesc(e.target.value);
  const handleChangeSiren = (e) => setSiren(e.target.value);
  const handleChangeGyl = (e) => setGyl(e.target.value);
  const handleChangeFormat = (e) => {
    const newformat = [...format, e.target.value];
    setFormat([...new Set(newformat)]);
  };
  const handleChangeType = (e) => {
    const newType = [...type, e.target.value];
    setType([...new Set(newType)]);
  };
  const handleChangeCategory = (e) => {
    const newcat = [...category, e.target.value];
    setCategory([...new Set(newcat)]);
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then(() => {
        console.log('Email envoyé !');
      })
      .catch((err) => console.error("L'envoi a échoué", err));
  };

  // send email
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const templateId = 'template_preinsc';
    sendFeedback(templateId, {
      contact_shop: contactPerson,
      mail_shop: email,
      tel_shop: phone,
      website_shop: website,
      address_shop: address,
      zipcode_shop: zipcode,
      city_shop: city,
      country_shop: country,
      desc_shop: desc,
      type_shop: type,
      siren_shop: siren,
      format_shop: format,
      category_shop: category,
      gyl_shop: gyl,
      from_name: shop,
      reply_to: email,
    });
  };

  const useStyles = makeStyles(() => ({
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
        margin: '0 auto',
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
        margin: '0.6rem',
      },
    },
    Button2: {
      color: '#231864',
      backgroundColor: '#fff',
      '&:hover': {
        background: '#fff',
      },
      borderRadius: '10px',
      border: '0.1rem solid #231864',
      textTransform: 'inherit',
      textAlign: 'center',
      marginBottom: '0.5rem',
    },
    Button3: {
      lineHeight: 0.4,
      '& .MuiButton-label': {
        fontSize: '0.5rem',
      },
    },
    formControl: {
      color: 'rgba(0, 0, 0, 0.54)',
      '& .MuiIconButton-colorSecondary': {
        color: '#F28A2F',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#F28A2F',
      },
      '& .MuiFormControlLabel-root': {
        marginRight: '1rem',
        width: '45%',
      },
      '& .MuiRadio-root': {
        color: '#F28A2F',
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className="connexion">
      <h2>PRE-INSCRIPTION</h2>
      <div className="intro_inscription">
        <p>
          Pour devenir partenaire et vendre vos cartes cadeaux sur notre
          plateforme, merci de remplir ce formulaire de pré inscription
          ci-dessous, notre service commerciale prendra contact avec vous dans
          les plus brefs délais pour finaliser notre partenariat.
        </p>
        <div className="inscription_contact">
          <Link to="/">
            <Button className={classes.Button2} variant="contained">
              Pour en savoir plus sur nos offres, visitez notre mini site dédié
              aux enseignes.
            </Button>
          </Link>
          <Link to="/contact">
            <Button className={classes.Button2} variant="contained">
              Vous avez des questions ou souhaitez recevoir notre plaquette
              commerciale, contactez-nous via le formulaire de contact.
            </Button>
          </Link>
        </div>
      </div>
      <form
        className={`${classes.root} inscription`}
        noValidate
        autoComplete="off"
      >
        <div className="memberform">
          <TextField
            id="login-shop"
            label="Enseigne"
            variant="outlined"
            onChange={handleChangeShop}
            style={{ width: 300 }}
            required
          />
          <TextField
            id="login-contact"
            label="Personne à contacter"
            variant="outlined"
            onChange={handleChangeContactPerson}
            style={{ width: 300 }}
            required
          />
          <TextField
            id="login-phone"
            label="Téléphone"
            variant="outlined"
            onChange={handleChangePhone}
            style={{ width: 300 }}
            required
          />
          <TextField
            id="login-adress"
            label="Adresse"
            variant="outlined"
            onChange={handleChangeAddress}
            style={{ width: 300 }}
            required
          />
          <TextField
            id="login-zipcode"
            label="Code postal"
            variant="outlined"
            value={zipcode}
            onChange={handleChangeZipcode}
            style={{ width: 300 }}
            required
          />
          <TextField
            id="login-city"
            label="Ville"
            variant="outlined"
            value={city}
            onChange={handleChangeCity}
            style={{ width: 300 }}
            required
          />
          <TextField
            id="login-country"
            label="Pays"
            variant="outlined"
            value={country}
            onChange={handleChangeCountry}
            style={{ width: 300 }}
            required
          />
        </div>
        <div className="memberform">
          <TextField
            id="login-mail"
            label="E-mail"
            variant="outlined"
            onChange={handleChangeEmail}
            style={{ width: 300 }}
            required
          />
          <TextField
            id="login-website"
            label="Site internet"
            variant="outlined"
            value={website}
            onChange={handleChangeWebsite}
            style={{ width: 300 }}
            required
          />
          <TextField
            id="login-siren"
            label="SIREN"
            variant="outlined"
            onChange={handleChangeSiren}
            style={{ width: 300 }}
            required
          />
          <TextField
            id="login-descr"
            label="Description de l'enseigne"
            placeholder="Placeholder"
            value={desc}
            onChange={handleChangeDesc}
            required
            multiline
            rows={6}
            variant="outlined"
          />
          <FormControl
            component="fieldset"
            className={classes.formControl}
            style={{ width: 300 }}
          >
            <FormLabel component="legend" required>
              Type d&apos;enseigne
            </FormLabel>
            <FormHelperText>Sélection multiple possible</FormHelperText>
            <FormGroup aria-label="position" row required>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeFormat}
                    name="E-commerce"
                    value="E-commerce"
                  />
                }
                label="E-commerce"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeFormat}
                    name="Magasin"
                    value="Magasin"
                  />
                }
                label="Magasin"
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="memberform">
          <FormControl
            component="fieldset"
            className={classes.formControl}
            style={{ width: 300 }}
          >
            <FormLabel component="legend" required>
              Type d&apos;offres
            </FormLabel>
            <FormHelperText>Sélection multiple possible</FormHelperText>
            <FormGroup aria-label="position" row required>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeType}
                    name="Carte cadeau"
                    value="Carte cadeau"
                  />
                }
                label="Carte cadeau"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChangeType}
                    name="Abonnement"
                    value="Abonnement"
                  />
                }
                label="Abonnement"
              />
            </FormGroup>
          </FormControl>
          <FormControl
            component="fieldset"
            className={classes.formControl}
            style={{ width: 300 }}
          >
            <FormLabel component="legend" required>
              Catégorie
            </FormLabel>
            <FormHelperText>Sélection multiple possible</FormHelperText>
            <FormGroup aria-label="position" row>
              {allcat.map((cat) => (
                <FormControlLabel
                  control={
                    <Checkbox onChange={handleChangeCategory} name={cat.name} />
                  }
                  label={cat.name}
                  value={cat.name}
                />
              ))}
            </FormGroup>
          </FormControl>
          <FormControl
            component="fieldset"
            className={classes.formControl}
            style={{ width: 300 }}
          >
            <FormLabel component="legend" required>
              Participation au programme de charité Give You Love ?
            </FormLabel>
            <Button className={classes.Button3} variant="contained">
              En savoir plus
            </Button>
            <RadioGroup
              row
              aria-label="position"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="Oui"
                control={<Radio color="primary" />}
                label="Oui"
                labelPlacement="right"
                onChange={handleChangeGyl}
              />
              <FormControlLabel
                value="Non"
                control={<Radio color="primary" />}
                label="Non"
                labelPlacement="right"
                onChange={handleChangeGyl}
              />
              <FormControlLabel
                value="Ultérieurment"
                control={<Radio color="primary" />}
                label="Ultérieurement"
                labelPlacement="right"
                onChange={handleChangeGyl}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </form>
      <div className="confirmmember">
        <Button
          className={classes.Button}
          variant="contained"
          onClick={handleOnSubmit}
        >
          Confirmer
        </Button>
      </div>
    </div>
  );
};

export default MemberContainer;
