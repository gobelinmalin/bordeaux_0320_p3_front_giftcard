import * as actionTypes from './actionTypes';
import axios from 'axios';

/* products */
export const getProducts = () => dispatch => {
  dispatch(setProductsLoading());
  axios.get('https://givyoo.herokuapp.com/api/products')
    .then(res => 
      dispatch({
      type: actionTypes.GET_PRODUCTS,
      payload: res.data
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setProductsLoading = () => {
  return {
    type: actionTypes.PRODUCTS_LOADING
  };
};


/* errors */
// RETURN ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: actionTypes.GET_ERRORS,
    payload: { msg, status }
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS
  };
};

/* authentification */
// Check token & load user (client or shop)
export const loadUser = (email, password) => (dispatch, getState) => {
  // User loading
  dispatch({ type: actionTypes.USER_LOADING });
  // Request body
  const body = JSON.stringify(email, password);
  axios.post('https://givyoo.herokuapp.com/api/auth/profile', body, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: actionTypes.USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.AUTH_ERROR
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const {token} = getState().auth;
  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
      Authorization: "Bearer " + token
    }
  };
  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};

/* authentification CLIENT */
// update data client
export const updateUser = (id, clientNewInfo) => 
  (dispatch) => {
    // body
    axios.put(`https://givyoo.herokuapp.com/api/clients/${id}`, clientNewInfo)
    .then(res => {
      dispatch(memberProfileUpdated(clientNewInfo));
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.AUTH_ERROR
      })})
};

export const memberProfileUpdated = clientNewInfo => {
  return {
    type: actionTypes.USER_MODIFY,
    clientNewInfo
  };
};

// Register User (creation)
export const register = (lastname, firstname, address, phone, birthdate, email, password, createProfile) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request body
  const body = JSON.stringify(lastname, firstname, address, phone, birthdate, email, password, createProfile);
  axios
    .post('https://givyoo.herokuapp.com/api/auth/signup', body, config)
    .then(res =>
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: actionTypes.REGISTER_FAIL
      });
    });
};

// Login User
export const login = (email, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request body
  const body = JSON.stringify(email, password);
  axios
    .post('https://givyoo.herokuapp.com/api/auth/login', body, config)
    .then(res =>
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: actionTypes.LOGIN_FAIL
      });
    });
};




/* Authentification SHOP */
// update data shop
// ROUTE A FAIREEEEE
export const updateShop = (id, shopNewInfo) => 
  (dispatch) => {
    // body
    axios.put(`https://givyoo.herokuapp.com/api/admin/${id}`, shopNewInfo)
    .then(res => {
      dispatch(shopProfileUpdated(shopNewInfo));
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.SHOPAUTH_ERROR
      })})
};

export const shopProfileUpdated = shopNewInfo => {
  return {
    type: actionTypes.SHOP_MODIFY,
    shopNewInfo
  };
};

// request register shop
// CREER UNE ROUTE ENVOI MAIL ?
export const requestRegisterShop = (alldatas) => (dispatch) => {
  // Request body
  const body = JSON.stringify(alldatas);
  axios
    .post('https://givyoo.herokuapp.com/api/auth/signup/admin', body)
    .then(res =>
      dispatch({
        type: actionTypes.REGISTERSHOP_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTERSHOP_FAIL')
      );
      dispatch({
        type: actionTypes.REGISTERSHOP_FAIL
      });
    });
};

// Login shop
export const loginShop = (email, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  // Request body
  const body = JSON.stringify(email, password);
  axios
    .post('https://givyoo.herokuapp.com/api/auth/login/admin', body, config)
    .then(res =>
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGINSHOP_FAIL')
      );
      dispatch({
        type: actionTypes.LOGIN_FAIL
      });
    });
};