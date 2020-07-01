import * as actionTypes from './actionTypes';

export const getProducts = (products) => {
  return {
    type: actionTypes.GET_PRODUCTS,
    products,
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

export const finalFilter = () => {
  return {
    type: actionTypes.FINAL_FILTER,
  };
};
