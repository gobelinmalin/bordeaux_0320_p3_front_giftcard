import React from 'react';

import Header from './components/Header';

import './App.css';

import Contact from './components/Contact/Contact';
import HomeContainer from './components/Home/HomeContainer';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Header />
        <Route path="/" component={HomeContainer} exact />
        <Route path="/contact" component={Contact} exact />
        <Footer />
      </Switch>
    </Router>
  );
}

export default App;