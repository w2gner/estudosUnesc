import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);