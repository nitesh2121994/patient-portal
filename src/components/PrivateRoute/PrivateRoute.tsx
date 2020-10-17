import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ routedComponent: Component, ...rest }: any) => {

    const isLogin = () => {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    }

    return (
        <>
            <Route {...rest} render={props => (
               isLogin() ?
                    <Component {...props} />
                    : <Redirect to="/login" />
            )} />
        </>
    )
}

export default PrivateRoute;


