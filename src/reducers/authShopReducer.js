import {
    SHOP_LOADED,
    SHOP_LOADING,
    SHOP_MODIFY,
    SHOPAUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTERSHOP_SUCCESS,
    REGISTERSHOP_FAIL
} from '../actions/actionTypes';
  
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    shop: ''
};
  
export default function(state = initialState, action) {
    switch (action.type) {
      case SHOP_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case SHOP_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          shop: action.payload
        };
      case SHOP_MODIFY:
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          shop: action.userUpdated
        };
      case LOGIN_SUCCESS:
      case REGISTERSHOP_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false
        };
      case SHOPAUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTERSHOP_FAIL:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          shop: null,
          isAuthenticated: false,
          isLoading: false
        };
      default:
        return state;
    }
};