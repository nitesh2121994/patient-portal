import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Signup from './components/signup/containers/Signup';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import PatientRouting from './components/Patient/PatientRouting';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from="/" exact to="/dashboard" />
        <Route component={Login} path="/login" exact />
        <Route component={Signup} path="/signup" exact />
        <PrivateRoute routedComponent={() => <Dashboard />} path="/dashboard" exact />
        <PrivateRoute routedComponent={() => <PatientRouting />} path="/patient" />

      </Switch>
    </Router>
  );
}

export default App;
