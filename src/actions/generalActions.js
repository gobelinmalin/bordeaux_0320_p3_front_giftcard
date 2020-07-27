/* eslint-disable no-use-before-define */
import axios from 'axios';
import * as actionTypes from './actionTypes';

/* Cart */

export const saveDelivery = (data) => {
  return {
    type: actionTypes.SAVE_DELIVERY,
    deliveryData: data,
  };
};

export const addToCart = (item) => {
  return {
    type: actionTypes.ADD_TO_CART,
    item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    id,
  };
};

/* products */
export const getProducts = () => (dispatch) => {
  dispatch(setProductsLoading());
  axios
    .get(`${process.env.REACT_APP_LOCALHOST}/api/products/cards`)
    .then((res) =>
      dispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setProductsLoading = () => {
  return {
    type: actionTypes.PRODUCTS_LOADING,
  };
};

export const filterByTheme = (theme, data) => {
  return {
    type: actionTypes.FILTER_BY_THEME,
    theme,
    dataTheme: data,
  };
};

export const filterByRecipient = (recipient, data) => {
  return {
    type: actionTypes.FILTER_BY_RECIPIENT,
    recipient,
    dataRecipient: data,
  };
};

export const filterByType = (type2, data) => {
  return {
    type: actionTypes.FILTER_BY_TYPE,
    type2,
    dataType: data,
  };
};

export const finalFilter = (data) => {
  return {
    type: actionTypes.FINAL_FILTER,
    data,
  };
};

export const setFinalArray = (array) => {
  return {
    type: actionTypes.SET_FINAL_ARRAY,
    finalArray: array,
  };
};

// SHOPS //
export const filterShopByTheme = (theme, data) => {
  return {
    type: actionTypes.FILTER_BY_THEMESHOP,
    theme,
    dataTheme: data,
  };
};

export const filterShopByRecipient = (recipient, data) => {
  return {
    type: actionTypes.FILTER_BY_RECIPIENTSHOP,
    recipient,
    dataRecipient: data,
  };
};

export const filterShopByType = (type2, data) => {
  return {
    type: actionTypes.FILTER_BY_TYPESHOP,
    type2,
    dataType: data,
  };
};

export const finalShopFilter = (data) => {
  return {
    type: actionTypes.FINAL_FILTERSHOP,
    data,
  };
};

export const setFinalShopArray = (array) => {
  return {
    type: actionTypes.SET_FINAL_ARRAYSHOP,
    finalArray: array,
  };
};

/* errors */
// RETURN ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: actionTypes.GET_ERRORS,
    payload: { msg, status },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: actionTypes.CLEAR_ERRORS,
  };
};

/* authentification */
// Logout client - shop
export const logOut = () => {
  return {
    type: actionTypes.LOGOUT_SUCCESS,
  };
};

/* authentification CLIENT */
// Check token & load client
export const loadUser = (token) => (dispatch) => {
  // User loading
  dispatch({ type: actionTypes.USER_LOADING });
  // Request body
  axios
    .post(`${process.env.REACT_APP_LOCALHOST}/api/auth/profile`, null, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then((res) =>
      dispatch({
        type: actionTypes.USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.AUTH_ERROR,
      });
    });
};

// update data client
export const updateUser = (id, clientNewInfo) => (dispatch) => {
  // body
  axios
    .put(`${process.env.REACT_APP_LOCALHOST}/api/clients/${id}`, clientNewInfo)
    .then(() => {
      dispatch(memberProfileUpdated(clientNewInfo));
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.AUTH_ERROR,
      });
    });
};

export const memberProfileUpdated = (clientNewInfo) => {
  return {
    type: actionTypes.USER_MODIFY,
    clientNewInfo,
  };
};

// Register User (creation)
export const register = (
  lastname,
  firstname,
  address,
  phone,
  birthdate,
  email,
  password,
  createProfile
) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Request body
  const body = JSON.stringify(
    lastname,
    firstname,
    address,
    phone,
    birthdate,
    email,
    password,
    createProfile
  );
  axios
    .post(`${process.env.REACT_APP_LOCALHOST}/api/auth/signup`, body, config)
    .then((res) =>
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      );
      dispatch({
        type: actionTypes.REGISTER_FAIL,
      });
    });
};

// Login User
export const login = (email, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Request body
  const body = JSON.stringify(email, password);
  axios
    .post(`${process.env.REACT_APP_LOCALHOST}/api/auth/login`, body, config)
    .then((res) =>
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: actionTypes.LOGIN_FAIL,
      });
    });
};

/* Authentification SHOP */
// Check token & load shop
export const loadShop = (token) => (dispatch) => {
  // User loading
  dispatch({ type: actionTypes.SHOP_LOADING });
  // Request body
  axios
    .post(`${process.env.REACT_APP_LOCALHOST}/api/auth/profile`, null, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    })
    .then((res) =>
      dispatch({
        type: actionTypes.SHOP_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.SHOPAUTH_ERROR,
      });
    });
};
// update data shop
export const updateShop = (id, shopNewInfo) => (dispatch) => {
  // body
  axios
    .put(`${process.env.REACT_APP_LOCALHOST}/api/admin/${id}`, shopNewInfo)
    .then(() => {
      dispatch(shopProfileUpdated(shopNewInfo));
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: actionTypes.SHOPAUTH_ERROR,
      });
    });
};

export const shopProfileUpdated = (shopNewInfo) => {
  return {
    type: actionTypes.SHOP_MODIFY,
    shopNewInfo,
  };
};

// request register shop
export const requestRegisterShop = (alldatas) => (dispatch) => {
  // Request body
  const body = JSON.stringify(alldatas);
  axios
    .post(`${process.env.REACT_APP_LOCALHOST}/api/auth/signup/admin`, body)
    .then((res) =>
      dispatch({
        type: actionTypes.REGISTERSHOP_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data,
          err.response.status,
          'REGISTERSHOP_FAIL'
        )
      );
      dispatch({
        type: actionTypes.REGISTERSHOP_FAIL,
      });
    });
};

// Login shop
export const loginShop = (email, password) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Request body
  const body = JSON.stringify(email, password);
  axios
    .post(
      `${process.env.REACT_APP_LOCALHOST}/api/auth/login/admin`,
      body,
      config
    )
    .then((res) =>
      dispatch({
        type: actionTypes.LOGINSHOP_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: actionTypes.LOGINSHOP_FAIL,
      });
    });
};

// CHOICE

export const cardChoice = (data) => {
  return {
    type: actionTypes.CARD_CHOICE,
    data,
  };
};

export const setStep = (data) => {
  return {
    type: actionTypes.SET_STEP,
    data,
  };
};
