import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MapView from './pages/MapView';
import Profile from './pages/Profile';
import TeamChooser from './pages/TeamChooser';
import NoMatch from './pages/NoMatch';
import newLogin from './pages/newLogin';
import BarNav from './components/BarNav';
import Wrapper from './components/Wrapper';



const App = () => (
  <Router>
    <div>
    {/* <Navbar/> */}
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
    </div>
    
  </Router>
);

export default App;
