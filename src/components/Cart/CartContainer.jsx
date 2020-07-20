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
      <h2>PANIER</h2>
      {cart.length > 0 ? (
        cart.map((element) => {
          return (
            <div className="ItemContainer" key={element.id}>
              <CartItem
                title={element.title}
                image={element.image}
                credit={element.price}
                description={element.description}
                message={element.message}
                removeFromCart={() => removeFromCart(element.id)}
              />
              <div className="CartTotalContainer">
                <CartTotal step1 />
              </div>
            </div>
          );
        })
      ) : (
        <div className="paniervide">
          <p>Votre panier est vide</p>
        </div>
      )}
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
  cart: [],
  removeFromCart: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
