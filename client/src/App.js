import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LogIn from './pages/LogIn';
// import MapView from './pages/MapView';
// import Profile from './pages/Profile';
// import TeamChooser from './pages/TeamChooser';
// import NoMatch from './pages/NoMatch';
// import Nav from './components/Nav';
import View from './components/View';

const App = () => (
  <Router>
    <div>
      
      <Switch>
        <Route exact path = '/view' component = {View} />
        {/* <Route exact path = '/' component = {LogIn} />
        <Route exact path = '/MapView' component = {MapView} />
        <Route exact path = '/Profile' component = {Profile} />
        <Route exact path = '/TeamChooser' component = {TeamChooser} />
        <Route exact path = '/NoMatch' component = {NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
