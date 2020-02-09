import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

import './App.css';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import LeadershipComponent from './components/LeadershipComponent';

function App() {
  return (
      <BrowserRouter>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <HomeComponent />
          </Route>
          <Route path="/about">
            <AboutComponent />
          </Route> 
          <Route exact path="/leadership">
            <LeadershipComponent />
          </Route> 
          <Route exact path="/">
            <HomeComponent />
          </Route>          
        </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
