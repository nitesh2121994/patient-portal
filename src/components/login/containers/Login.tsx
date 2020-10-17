import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { USER_LOGIN } from "../actions/loginAction";
import LoginForm from "../presentations/LoginForm";

export interface LoginValue {
    email: string;
    password: string;
}

interface LoginProps {
    dispatch: any;
    success: boolean;
    error: string;
    history: any
}

const Login = (props: LoginProps) => {

    const { dispatch, success, error } = props;

    useEffect(() => {
        if (props.success) {
            props.history.push('/dashboard');
        }
    }, [props.success])

    const login = (values: LoginValue) => {
        dispatch({ type: USER_LOGIN, payload: values })
    }

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            {console.log('props', props)}
            <LoginForm
                login={login}
                success={success}
                error={error} />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    success: state.login.success,
    error: state.login.error
});

export default connect(mapStateToProps)(Login);
