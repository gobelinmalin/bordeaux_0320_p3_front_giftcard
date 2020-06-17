import React from 'react';
import HomeProductContainer from './HomeProductContainer';
import HomeThemeContainer from './HomeThemeContainer';
import HomeShop from './HomeShop';
import HomerBanner from './HomeBanner';

const HomeContainer = () => {
    return (
        <>
            <HomerBanner />
            <HomeProductContainer />
            <HomeThemeContainer />
            <HomeShop />
        </>
    )
}

export default HomeContainer;