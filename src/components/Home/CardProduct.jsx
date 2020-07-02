import React from 'react';
import '../../style/CardProduct.css';
import ButtonPersonnalisation from '../../style/ButtonPersonnalisation';

const CardProduct = ({product}) => {
    return (
        <div className='card-product' >
            <img src={product.image} alt={product.name} className='card-product-img' />
            <p>à partir de {product.credit}€</p>
            <ButtonPersonnalisation />
        </div>
    )
};

export default CardProduct;
