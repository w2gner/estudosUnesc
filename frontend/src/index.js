import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Dashboard from './Components/Dashboard';
import Add from './Components/Add';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard/home" component={Dashboard} />
        <Route path="/dashboard/add" component={Add} />
        <Route path="/dashboard/stored" component={Dashboard} />
        <Route path="/dashboard/materia" component={Dashboard} />
        <Route component={LoginPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);