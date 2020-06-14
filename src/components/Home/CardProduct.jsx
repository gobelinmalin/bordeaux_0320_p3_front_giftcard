import React from 'react';
import '../../styles/CardProduct.css';

const CardProduct = ({products}) => {
    return (
        <div className='card-product' >
            <div className='card-product-img' />
            <button className='button-custom'>Je personnalise !</button>
        </div>
    )
};

export default CardProduct;