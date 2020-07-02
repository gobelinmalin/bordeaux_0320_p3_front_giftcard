import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

import Contact from './components/Contact/Contact';
import HomeContainer from './components/Home/HomeContainer';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
        <Switch>
          <Route path="/" component={HomeContainer} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
