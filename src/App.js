import React, { useState } from 'react';
import Home from './Components/Home';
import { Switch, Route } from 'react-router-dom';
import './default.css';




const App = props => {

  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => (
          <Home />
        )} />
        <Route path='/professional' render={() => (
         <div></div>
        )} />
      </Switch>
    </div>
  );
}

export default App;
