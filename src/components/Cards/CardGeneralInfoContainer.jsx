/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import * as actionCreators from '../../actions/index';

const CardGeneralInfoContainer = (props) => {
  const { cardChoice, product, shop } = props;
  // first price of the card
  const [priceCard, setPriceCard] = useState();

  // infos of the card
  const infoProduct = product[0];
  useEffect(() => {
    if (infoProduct) {
      axios
        .get(
          `${process.env.REACT_APP_LOCALHOST}/api/products/${infoProduct.id}`
        )
        .then((res) => res.data)
        .then((data) => Math.min(...data.map((o) => o.credit)))
        .then((results) => setPriceCard(results))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [product.id, infoProduct]);

  // all prices of the card
  const prices = product.map((price) => price.credit).sort();
  // all formats of the card
  const formats = product.map((format) => format.format).sort();

  let image = '';
  let title = '';
  let description = '';
  let id;
  // let id = Math.random();

  // choice client
  const [choice, setChoice] = useState({
    type: 0,
    price: '',
    message: '',
    image,
    title,
    description,
    id,
  });

  if (infoProduct) {
    image = infoProduct.image;
    title = infoProduct.name;
    description = infoProduct.description;
    id = infoProduct.id;
  }

  useEffect(() => {
    if (image) {
      setChoice((prevState) => {
        return { ...prevState, image, title, description, id };
      });
    }
  }, [image, description, title, id]);

  // add choice to the reducer
  useEffect(() => {
    cardChoice(choice);
  }, [choice, cardChoice]);

  const useStyles = makeStyles(() => ({
    formControl: {
      color: 'rgba(0, 0, 0, 0.54)',
      width: '100%',
      marginBottom: '1rem',
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
        width: '100%',
      },
      '& .MuiIconButton-colorSecondary': {
        color: '#F28A2F',
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: '#F28A2F',
      },
      '& .MuiFormControlLabel-root': {
        marginRight: '1rem',
        width: 'auto',
      },
      '& .MuiRadio-root': {
        color: '#F28A2F',
      },
    },
    Button: {
      color: 'white',
      margin: 'auto',
      marginLeft: 0,
      backgroundColor: '#231864',
      '&:hover': {
        background: '#231864',
      },
      borderRadius: '10px',
    },
  }));

  const classes = useStyles();

  return (
    <div className="product-info-container">
      {infoProduct && (
        <>
          <div className="product-img-container">
            <img
              className="product-info-img"
              src={infoProduct.image}
              alt={infoProduct.name}
            />
          </div>
          <hr />
          <div className="product-info-description">
            <h2>{infoProduct.name}</h2>
            <div className="product_price">
              <h3>{shop.name}</h3>
              {priceCard && <p>à partir de {priceCard}€</p>}
            </div>
            <p>{infoProduct.description}</p>
            <div className="product_choice">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="label">Choisissez une valeur</InputLabel>
                <Select
                  labelId="label"
                  value={choice.price}
                  onChange={(e) => {
                    const { value } = e.target;
                    setChoice((prevState) => {
                      return { ...prevState, price: value };
                    });
                  }}
                  label="Sélectionnez un montant"
                >
                  {prices &&
                    prices.map((price, index) => (
                      <MenuItem key={index} value={price}>
                        {price}€
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              <FormControl
                component="fieldset"
                className={classes.formControl}
                style={{ width: 300 }}
              >
                <FormLabel component="legend">Type de carte</FormLabel>
                <RadioGroup
                  row
                  value={String(choice.type)}
                  onChange={(e) => {
                    const { value } = e.target;
                    setChoice((prevState) => {
                      return { ...prevState, type: value };
                    });
                  }}
                >
                  {formats &&
                    formats.map((format) => (
                      <FormControlLabel
                        key={format}
                        value={String(format)}
                        control={<Radio />}
                        label={format === 1 ? 'Carte physique' : 'E-carte'}
                      />
                    ))}
                </RadioGroup>
              </FormControl>
              <Link
                to={choice.type === 0 ? '/choix/e-carte/1' : '/choix/physique'}
              >
                <Button className={classes.Button} variant="contained">
                  Continuer
                </Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    choiceClient: state.choice.choice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardChoice: (data) => dispatch(actionCreators.cardChoice(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardGeneralInfoContainer);
