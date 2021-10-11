
import './App.css';
import  Hero  from './components/hero';
import  Dashboard  from './pages/dashboard';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (<Router>
    <Hero />
    <Switch>
          <Route exact path="/" >
            <Dashboard />
          </Route>
        </Switch>
        </Router>
  );
}

export default App;
