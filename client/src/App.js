import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import MapView from './pages/MapView';
import Profile from './pages/Profile';
import TeamChooser from './pages/TeamChooser';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path = '/' component = {Login} />
        <Route exact path = '/MapView' component = {MapView} />
        <Route exact path = '/Profile' component = {Profile} />
        <Route exact path = '/TeamChooser' component = {TeamChooser} />
      </Switch>
    </div>
  </Router>
);

export default App;
