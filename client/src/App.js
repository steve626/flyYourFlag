import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapView from './pages/MapView';
import Profile from './pages/Profile';
import TeamChooser from './pages/TeamChooser';
import NoMatch from './pages/NoMatch';
import newLogin from './pages/newLogin';
import BarNav from './components/BarNav';
import Wrapper from './components/Wrapper';
import BotNav from './components/BotNav';




const App = () => (
  <Router>
    <div>
    <BarNav />
    <Wrapper>
      <Switch>
        <Route exact path = '/' component = {newLogin} />
        <Route exact path = '/MapView' component = {MapView} />
        <Route exact path = '/Profile' component = {Profile} />
        <Route exact path = '/TeamChooser' component = {TeamChooser} />
        <Route exact path = '/NoMatch' component = {NoMatch} />
      </Switch>
    </Wrapper>
    <BotNav/>
  </div>
 
</Router> 
);

export default App;