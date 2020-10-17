import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useState } from "react";
import { SignupValue } from "../containers/Signup";

interface SignupFormProps {
    userSignup: (value: SignupValue) => void;
    success: boolean;
    error: string;
}

const SignupForm = (props: SignupFormProps) => {

    const [fullNameError, setFullNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const initialValues: SignupValue = { fullName: '', email: '', password: '' };

    const onSignup = (values: SignupValue, actions: any) => {
        setFullNameError(false);
        setEmailError(false);
        setPasswordError(false);
        if (values.email && values.password) {
            props.userSignup(values);
            actions.setSubmitting(false);
            return;
        }
        if (!values.fullName) {
            setFullNameError(true);
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
            onSubmit={(values: SignupValue, actions) => {
                onSignup(values, actions)
            }}
        >
            <Form className="form-signin" style={{ width: '400px' }}>
                <label htmlFor="fullName">Full Name</label>
                <Field id="fullName" name="fullName" placeholder="Full name" className="form-control mb-3" />
                {fullNameError &&
                    <div className="mb-3" style={{ color: 'red' }}>
                        Full name is required.
                </div>
                }
                <label htmlFor="email">Email</label>
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

export default SignupForm;