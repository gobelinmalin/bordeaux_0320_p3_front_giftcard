/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const CardGeneralInfoContainer = ({ product }) => {
  const [priceCard, setPriceCard] = useState();

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
        width: '45%',
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
              <h3>{infoProduct.name}</h3>
              {priceCard && <p>à partir de {priceCard}€</p>}
            </div>
            <p>{infoProduct.description}</p>
            <div className="product_choice">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="label">Choisissez une valeur</InputLabel>
                <Select
                  labelId="label"
                  value=""
                  // onChange={handleChangeCivility}
                  label="Sélectionnez un montant"
                >
                  <MenuItem value="10">10€</MenuItem>
                  <MenuItem value="20">20€</MenuItem>
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
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value="E-carte"
                    control={<Radio color="primary" />}
                    label="E-carte"
                    labelPlacement="end"
                  />
                  <FormControlLabel
                    value="Physique"
                    control={<Radio color="primary" />}
                    label="Physique"
                    labelPlacement="end"
                  />
                </RadioGroup>
              </FormControl>
              <Button className={classes.Button} variant="contained">
                Continuer
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

CardGeneralInfoContainer.defaultProps = {
  product: PropTypes.object,
  shop: PropTypes.object,
};

export default CardGeneralInfoContainer;
