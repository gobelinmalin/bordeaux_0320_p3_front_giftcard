import React from 'react';

import Header from './components/Header';

import './App.css';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Header />
        <Route path="/contact" component={Contact} exact />
        <Footer />
      </Switch>
    </Router>
  );
}

export default App;
