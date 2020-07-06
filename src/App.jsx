import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

import Contact from './components/Contact/Contact';
import HomeContainer from './components/Home/HomeContainer';
import Footer from './components/footer/Footer';
import ShopsContainer from './components/Shops/ShopsContainer';
import ShopContainer from './components/Shop/ShopContainer';
import ConnexionContainer from './components/Connexion/ConnexionContainer';
import Connexion from './components/Connexion/Connexion';
import ClientArea from './components/Connexion/ClientArea';
import MemberContainer from './components/Connexion/MemberContainer';
import ModifyClient from './components/Connexion/ModifyClient';
import PreRegisterShop from './components/Connexion/PreRegisterShop';
import ShopArea from './components/Connexion/ShopArea';
import CardsContainer from './components/GiftCardPage/CardsContainer';
import CardContainer from './components/Cards/CardContainer';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomeContainer} exact />
        <Route path="/connexion" component={ConnexionContainer} exact />
        <Route path="/connexion/:user" component={Connexion} exact />
        <Route path="/mon-compte-client" component={ClientArea} exact />
        <Route path="/mon-compte-enseigne" component={ShopArea} exact />
        <Route
          path="/modifier-mon-compte/client"
          component={ModifyClient}
          exact
        />
        <Route
          path="/devenir-membre/client"
          component={MemberContainer}
          exact
        />
        <Route
          path="/pre-inscription/enseigne"
          component={PreRegisterShop}
          exact
        />
        <Route path="/contact" component={Contact} exact />
        <Route path="/cartes-cadeaux" component={CardsContainer} exact />
        <Route path="/cartes-cadeaux/:id" component={CardContainer} exact />
        <Route path="/enseignes" component={ShopsContainer} exact />
        <Route path="/enseignes/:id" component={ShopContainer} exact />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
