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
  }));

  const classes = useStyles();

  const { cart, saveDelivery, delivery, step1, choice } = props;
  const [selectedDelivery, setSelectedDelivery] = useState({
    value: '5',
    label: 'Livraison en 24h (5€)',
  });

  const handleChange = () => {
    setSelectedDelivery(selectedDelivery);
    saveDelivery(selectedDelivery);
  };

  const totalPrice = cart
    .map((element) => element.credit)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const priceAndFees =
    selectedDelivery.value === undefined
      ? totalPrice
      : totalPrice + parseInt(selectedDelivery.value, 10);
  return (
    <div className="CartTotal">
      {choice ? (
        <>
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
          <div className="Total">
            <div className="Price">{priceAndFees}€</div>
          </div>
          <div className="UnderTotal">
            <p>Sous total</p>
            <div className="Price">{totalPrice}€</div>
          </div>
          <p>Livraison</p>
          {step1 ? (
            <Select
              styles={customStyles}
              // isDisabled={step1}
              value={selectedDelivery}
              onChange={handleChange}
              options={options}
              width="333px"
            />
          ) : (
            <TextField
              disabled
              id="delivery"
              variant="outlined"
              value={delivery}
              style={{ width: 300 }}
            />
          )}
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
  delivery: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  step1: PropTypes.bool,
  choice: PropTypes.instanceOf(Object),
};

CartTotal.defaultProps = {
  cart: '',
  saveDelivery: '',
  delivery: [],
  choice: {},
  step1: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTotal);
