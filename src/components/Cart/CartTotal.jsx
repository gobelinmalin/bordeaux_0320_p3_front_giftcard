import React, { useState } from 'react';
import Select from 'react-select';
import './CartTotal.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ModalConnexion from '../ModalConnexion/ModalConnexion';
import * as actionCreators from '../../actions/index';

const options = [
  { value: '5', label: 'Livraison en 24h (5€)' },
  { value: '6', label: 'Livraison en 48h (6€)' },
];

const customStyles = {
  menu: (provided) => ({
    ...provided,
    width: 300,
  }),
  control: (provided) => ({
    ...provided,
    width: 300,
  }),
};

const CartTotal = (props) => {
  const useStyles = makeStyles(() => ({
    Button: {
      color: 'white',
      backgroundColor: '#231864',
      '&:hover': {
        background: '#231864',
      },
      borderRadius: '10px',
      margin: 'auto',
    },
    textField: {
      '& label.Mui-focused': {
        color: '#F28A2F',
      },
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: '#F28A2F',
        },
      },
      margin: '1rem 0',
      marginRight: '0.5rem',
      '& .MuiInputBase-root.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
  }));

  const classes = useStyles();

  const { cart, saveDelivery, delivery, step1, choice } = props;
  const [selectedDelivery, setSelectedDelivery] = useState({
    value: '5',
    label: 'Livraison en 24h (5€)',
  });

  const handleChange = (deliverychoice) => {
    setSelectedDelivery(deliverychoice);
    saveDelivery(selectedDelivery);
  };

  const totalPrice = cart
    .map((element) => element.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const priceAndFees =
    selectedDelivery.value === undefined
      ? totalPrice
      : totalPrice + parseInt(selectedDelivery.value, 10);

  return (
    <div className="CartTotal">
      {choice.type === 0 ? (
        <>
          <h4 className="cartcardtitle">{choice.title}</h4>
          {choice.message.length > 0 ? (
            <p className="pmessage">
              Votre message : &quot;{choice.message}&quot;
            </p>
          ) : (
            <p className="pmessage">Envoi sans message personnalisé</p>
          )}
          <div className="Total">
            <p>Total</p>
            <div className="Price">{choice.price}€</div>
          </div>
          <Button className={classes.Button} variant="contained">
            Paiement
          </Button>
        </>
      ) : (
        <>
          {cart.map((card) => (
            <div className="UnderTotal">
              <p>{card.title}</p>
              <div className="Price">{card.price}€</div>
            </div>
          ))}
          {cart.length > 1 && (
            <div className="UnderTotal">
              <p>
                <strong>Sous total</strong>
              </p>
              <div className="Price">{totalPrice}€</div>
            </div>
          )}
          <p>Livraison</p>
          {step1 ? (
            <Select
              styles={customStyles}
              value={selectedDelivery}
              onChange={handleChange}
              options={options}
              width="300px"
            />
          ) : (
            <TextField
              disabled
              className={classes.textField}
              id="delivery"
              variant="outlined"
              value={delivery}
              style={{ width: 300 }}
            />
          )}
          <div className="Total">
            <h4>Total</h4>
            <div className="Price">
              <strong>{priceAndFees}€</strong>
            </div>
          </div>
          {step1 ? (
            <div className="BtnContainer">
              <ModalConnexion />
            </div>
          ) : (
            <Button className={classes.Button} variant="contained">
              Paiement
            </Button>
          )}
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    delivery: state.cart.delivery.label,
    choice: state.choice.choice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(actionCreators.removeFromCart(id)),
    saveDelivery: (delivery) => dispatch(actionCreators.saveDelivery(delivery)),
  };
};

CartTotal.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  saveDelivery: PropTypes.func,
  delivery: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  step1: PropTypes.bool,
  choice: PropTypes.instanceOf(Object),
};

CartTotal.defaultProps = {
  cart: '',
  saveDelivery: '',
  delivery: [],
  choice: {},
  step1: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);
