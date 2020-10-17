import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { SIGNUP } from "../actions/signupAction";
import SignupForm from "../presentations/SignupForm";

export interface SignupValue {
    fullName: string;
    email: string;
    password: string;
}

interface SignupProps {
    dispatch: any;
    success: boolean;
    error: string;
    history: any;
}

const Signup = (props: SignupProps) => {

    const { dispatch, success, error } = props;

    useEffect(() => {
        if (props.success) {
            props.history.push('/login');
        }
    }, [props.success])

    const userSignup = (values: SignupValue) => {
        dispatch({ type: SIGNUP, payload: values })
    }

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            {console.log('props', props)}
            <SignupForm
                userSignup={userSignup}
                success={success}
                error={error} />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    success: state.signup.success,
    error: state.signup.error
});

export default connect(mapStateToProps)(Signup);
