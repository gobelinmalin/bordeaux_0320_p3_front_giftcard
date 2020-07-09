import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cart: [],
  delivery: { value: '5', label: 'Livraison en 24h (5€)' },
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const newCart = state.cart.slice();
      const { item } = action;
      newCart.push(item);
      return {
        ...state,
        cart: newCart,
      };
    }
    case actionTypes.REMOVE_FROM_CART: {
      let newCart = state.cart;
      const { id } = action;
      newCart = newCart.filter((element) => element.id !== id);
      return {
        ...state,
        cart: newCart,
      };
    }

    case actionTypes.SAVE_DELIVERY: {
      const newDelivery = action.deliveryData;
      return {
        ...state,
        delivery: newDelivery,
      };
    }
    default:
      return state;
  }
}
