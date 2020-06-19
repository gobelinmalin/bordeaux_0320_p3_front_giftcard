import React from 'react';
import HomeProductContainer from './HomeProductContainer';
import HomeThemeContainer from './HomeThemeContainer';
import HomeShop from './HomeShop';
import HomerBanner from './HomeBanner';
import HomeStatic from './HomeStatic';

const HomeContainer = () => {
    return (
        <>
            <HomerBanner />
            <HomeStatic />
            <HomeProductContainer />
            <HomeThemeContainer />
            <HomeShop />
        </>
    )
}

export default HomeContainer;