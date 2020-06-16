import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact" component={Contact} exact />
        <Route path="/" component={Footer}  />
      </Switch>
    </Router>
  );
}

export default App;
