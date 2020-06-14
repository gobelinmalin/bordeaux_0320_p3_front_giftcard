import React from 'react';
import HomeCarousel from './HomeCarousel';
import HomeProductContainer from './HomeProductContainer';
import HomeThemeContainer from './HomeThemeContainer';
import HomeShop from './HomeShop';

const HomeContainer = () => {
    return (
        <>
            <HomeCarousel />
            <HomeProductContainer />
            <HomeThemeContainer />
            <HomeShop />
        </>
    )
}

export default HomeContainer;