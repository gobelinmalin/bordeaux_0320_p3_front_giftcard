import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Footer from './components/footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/contact" component={Contact} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
