import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { LoginValue } from "../containers/Login";

interface LoginFormProps {
    login: (value: LoginValue) => void;
    success: boolean;
    error: string;
}

const LoginForm = (props: LoginFormProps) => {

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const initialValues: LoginValue = { email: '', password: '' };
    const onLogin = (values: LoginValue, actions: any) => {
        setEmailError(false);
        setPasswordError(false);
        console.log('values', values);
        if (values.email && values.password) {
            props.login(values);
            actions.setSubmitting(false);
            return;
        }
        if (!values.email) {
            setEmailError(true);
        }
        if (!values.password) {
            setPasswordError(true);
        }
        actions.setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: LoginValue, actions) => {
                onLogin(values, actions)
            }}
        >
            <Form className="form-signin" style={{ width: '400px' }}>
                <label htmlFor="email">First Name</label>
                <Field id="email" name="email" placeholder="Email" className="form-control mb-3" />
                {emailError &&
                    <div className="mb-3" style={{ color: 'red' }}>
                        Email is required.
                </div>
                }
                <label htmlFor="Email">Password</label>
                <Field id="password" name="password" type="password" placeholder="Password" className="form-control mb-3" />
                {passwordError &&
                    <div className="mb-3" style={{ color: 'red' }}>
                        Password is required.
                </div>
                }
                <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>

                {props.error &&
                    <div className="mb-3" style={{ color: 'red' }}>
                        {props.error}
                </div>
                }
            </Form>
        </Formik>
    )
}

export default LoginForm;