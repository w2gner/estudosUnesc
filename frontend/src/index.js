import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import Dashboard from './Components/Dashboard';
import Classes from './Components/Classes';
import Exercises from './Components/Exercises';
import Subjects from './Components/Subjects';
import AddContent from './Components/AddContent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/addContent" component={AddContent} />
        <Route path="/subjects" component={Subjects} />
        <Route path="/classes" component={Classes} />
        <Route path="/exercises" component={Exercises} />
        <Route component={LoginPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);