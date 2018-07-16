import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from './pages/LogIn';
import MapView from './pages/MapView';
import Profile from './pages/Profile';
import TeamChooser from './pages/TeamChooser';
import NoMatch from './pages/NoMatch';
import View from './components/View';
import newLogin from './pages/newLogin';
// import ComposedTextField from './pages/testlogin';


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path = '/view' component = {View} />
        <Route exact path = '/' component = {newLogin} />
        <Route exact path = '/MapView' component = {MapView} />
        <Route exact path = '/Profile' component = {Profile} />
        <Route exact path = '/TeamChooser' component = {TeamChooser} />
        <Route exact path = '/NoMatch' component = {NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
