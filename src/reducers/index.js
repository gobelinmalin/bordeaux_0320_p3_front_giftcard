import { combineReducers } from 'redux';
import productReducer from './productReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import authShopReducer from './authShopReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  product: productReducer,
  error: errorReducer,
  auth: authReducer,
  authShop: authShopReducer,
  cart: cartReducer,
});
