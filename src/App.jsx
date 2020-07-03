import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

import Contact from './components/Contact/Contact';
import HomeContainer from './components/Home/HomeContainer';
import Footer from './components/footer/Footer';
import CardsContainer from './components/GiftCardPage/CardsContainer';
import ShopsContainer from './components/Shops/ShopsContainer';
import ShopContainer from './components/Shop/ShopContainer';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomeContainer} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/filteredCards" component={CardsContainer} exact />
        <Route path="/enseignes" component={ShopsContainer} exact />
        <Route path="/enseignes/:id" component={ShopContainer} exact />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
