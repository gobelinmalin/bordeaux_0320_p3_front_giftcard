import React from 'react';
import './CartContainer.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import * as actionCreators from '../../actions/index';

const CartContainer = (props) => {
  const { cart, removeFromCart } = props;

  return (
    <div className="CartContainer">
      <div className="ItemContainer">
        {cart.length > 0 ? (
          cart.map((element) => {
            return (
              <CartItem
                title={element.name}
                image={element.image}
                credit={element.credit}
                description={element.description}
                removeFromCart={() => removeFromCart(element.id)}
              />
            );
          })
        ) : (
          <p>Votre panier est vide</p>
        )}
      </div>
      <div className="CartTotalContainer">
        <CartTotal step1 />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(actionCreators.removeFromCart(id)),
  };
};

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
  removeFromCart: PropTypes.func,
};

CartContainer.defaultProps = {
  cart: '',
  removeFromCart: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
