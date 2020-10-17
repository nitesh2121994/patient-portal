import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import PatientForm from "./containers/PatientForm";
import PatientList from "./containers/PatientList";

const PatientRouting = () => {
    return (
        <>
            <Router>
            <Switch>
                {/* <Redirect from="/patient" exact to="list" /> */}
                <Route component={PatientList} path="/patient/list" />
                <Route component={PatientForm} path="/patient/add" />
                <Route component={PatientForm} path="/patient/:id" />

            </Switch>
        </Router>
        </>
    )
}

export default PatientRouting;