import { combineReducers } from 'redux';
import productReducer from './productReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import authShopReducer from './authShopReducer';
import cartReducer from './cartReducer';
import choiceReducer from './choiceReducer';
import shopReducer from './shopReducer';

export default combineReducers({
  product: productReducer,
  shop: shopReducer,
  error: errorReducer,
  auth: authReducer,
  authShop: authShopReducer,
  cart: cartReducer,
  choice: choiceReducer,
});
