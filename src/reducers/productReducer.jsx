import * as actionTypes from '../actions/actionTypes';

const initialState = [];

export default function productReducer(state = initialState, action) {
        switch(action.type) {
            case actionTypes.GET_PRODUCTS:
                const product = action.products
                const listProducts = action.products;
                let month = new Date();
                const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
                let actualMonth = months[month.getMonth()];
                const newProducts = listProducts.filter(product => product.creationDate.includes(actualMonth));
                console.log(newProducts)

                return {
                    ...state,
                    product: product,
                    newProducts: newProducts
                };
                
            default:
                return state;
        }
};