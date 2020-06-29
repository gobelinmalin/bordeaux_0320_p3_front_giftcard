import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    newProducts: [],
    loading: false
};

export default function productReducer(state = initialState, action) {
        switch(action.type) {
            case actionTypes.GET_PRODUCTS:
                const listProducts = action.payload;
                let month = new Date();
                const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
                let actualMonth = months[month.getMonth()];
                const newProducts = listProducts.filter(product => product.creationDate.includes(actualMonth));
                return {
                    ...state,
                    products: action.payload,
                    newProducts: newProducts,
                    loading:false
                };

            case actionTypes.PRODUCTS_LOADING:
                return {
                    ...state,
                    loading:true
                };

            default:
                return state;
        }
};