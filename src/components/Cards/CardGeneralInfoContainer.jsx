/* eslint-disable react/prop-types */
import React from 'react';
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

const CardGeneralInfoContainer = ({ product, shop }) => {
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
      {product && (
        <>
          <div className="product-img-container">
            <img
              className="product-info-img"
              src={product.image}
              alt={product.name}
            />
          </div>
          <hr />
          <div className="product-info-description">
            <h2>{product.name}</h2>
            <div className="product_price">
              <h3>{shop.name}</h3>
              <p>à partir de {product.credit}€</p>
            </div>
            <p>{product.description}</p>
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
