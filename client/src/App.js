import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Branch from "./pages/Branch";
import Account from "./pages/Account";

import "./styles/styles.scss";

import Header from "./components/Header.js";
import {Catalogue} from "./pages/Catalogue";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/catalogue'>
            <Catalogue />
          </Route>
          <Route path='/branch'>
            <Branch />
          </Route>
          <Route path='/account'>
            <Account />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
