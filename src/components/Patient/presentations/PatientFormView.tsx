import { Field, Form, Formik, FormikHelpers } from "formik";
import React, { useEffect, useState } from "react";
import { PatientValue } from "../containers/PatientForm";

interface PatientFormViewProps {
    savePatient: (value: PatientValue) => void;
    success: boolean;
    error: string;
    patient: PatientValue;
}

const PatientFormView = (props: PatientFormViewProps) => {

    const [fullNameError, setFullNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [genderError, setGenderError] = useState(false);
    const [initialValues, setInitialValues] = useState<any>({ fullName: '', email: '', age: '', gender: '' });



    // const initialValues = { fullName: '', email: '', age: '', gender: '' };

    useEffect(() => {
        console.log(props.patient);
        
        props.patient && setInitialValues(props.patient);
    }, [props.patient])

    const onSignup = (values: PatientValue, actions: any) => {
        setFullNameError(false);
        setEmailError(false);
        setAgeError(false);
        setGenderError(false);
        if (values.email && values.fullName && values.age && values.gender) {
            props.savePatient(values);
            actions.setSubmitting(false);
            return;
        }
        if (!values.fullName) setFullNameError(true);
        if (!values.email) setEmailError(true);
        if (!values.age) setAgeError(true);
        if (!values.gender) setGenderError(true);

        actions.setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: any, actions) => {
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
                <label htmlFor="age">Age</label>
                <Field id="age" name="age" type="number" placeholder="Age" className="form-control mb-3" />
                {ageError &&
                    <div className="mb-3" style={{ color: 'red' }}>
                        Age is required.
                </div>
                }
                <label htmlFor="gender">Gender</label>
                <Field as="select" name="gender" className="form-control mb-3">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </Field>
                {genderError &&
                    <div className="mb-3" style={{ color: 'red' }}>
                        Gender is required.
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

export default PatientFormView;