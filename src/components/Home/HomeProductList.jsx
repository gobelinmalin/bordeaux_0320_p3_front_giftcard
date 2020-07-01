import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import CardProduct from './CardProduct';
import axios from 'axios';
import * as actionCreators from '../../actions/index';


const HomeProductList = ({onglets, getProducts, newProducts}) => {
    const [monthProducts, setMonthProducts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCALHOST}/api/products`)
        .then(res => getProducts(res.data))
        .catch(err => { console.log(err)})
        axios.get(`${process.env.REACT_APP_LOCALHOST}/api/orders/products`)
        .then(res => res.data)
        .then(results => setMonthProducts(results))
        .catch(err => { console.log(err)})
      }, []);
    
    return(
        <div className="container-products">
            {onglets === 1 ? (
                <>
                    {newProducts && newProducts.slice(0,8).map(product => <CardProduct key={product.id} product={product} />)}
                </>
            ) : (
               <>
                    {monthProducts.slice(0,8).map(product => <CardProduct key={product.id} product={product} />)}
                </>
            )}
        </div>
    )
};
const mapStateToProps = state => {
    return {
      newProducts: state.newProducts
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
        getProducts: (products) => dispatch(actionCreators.getProducts(products)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomeProductList);