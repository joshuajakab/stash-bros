import React, { useState } from 'react';
import Home from './Components/Home';
import Bio from './Components/Bio';
import Contact from './Components/Contact';
import { Switch, Route } from 'react-router-dom';
import './default.css';
import AdminSignIn from './Components/AdminSignIn';
import Admin from './Components/Admin';




const App = props => {

  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route path='/bio' render={() => (
          <Bio />
        )} />
        <Route path='/contact' render={() => (
         <Contact />
        )} />
        <Route path='/admin' render={() => (
          <AdminSignIn />
        )} />
        <Route path='/admin-page' render={() => (
          <Admin />
        )} />
      </Switch>
    </div>
  );
}

export default App;
