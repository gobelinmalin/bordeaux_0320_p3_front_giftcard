import * as actionTypes from './actionTypes';

export const getProducts = (products) => {
        
    return {
        type: actionTypes.GET_PRODUCTS,
        products: products
    }
};