import React from 'react';
import HomeShopSlider from './HomeShopSlider';
import '../../styles/HomeShop.css';

const HomeShop = () => {
    return (
        <div className='home lastitem'>
            <h2>NOS ENSEIGNES</h2>
            <div className='shop-slider-container'>
                <HomeShopSlider />
            </div>
        </div>
    )
};

export default HomeShop;