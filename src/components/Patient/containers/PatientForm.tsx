import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { PATIENT_DETAIL, PATIENT_REDIRECT, PATIENT_SAVE } from "../actions/patientActions";
import PatientFormView from "../presentations/PatientFormView";

export interface PatientValue {
    fullName: string;
    email: string;
    age?: number;
    gender?: string;
}

interface PatientProps {
    dispatch: any;
    success: boolean;
    error: string;
    history: any;
    patient: any;
}

const PatientForm = (props: PatientProps) => {

    const { dispatch, success, error } = props;
    const { id } = useParams<any>();

    useEffect(() => {
        if (id) {
            dispatch({ type: PATIENT_DETAIL, payload: +id });
        }
    }, [])

    useEffect(() => {
        if (props.success) {
            dispatch({ type: PATIENT_REDIRECT, payload: +id });
            props.history.push('/patient/list');
        }
    }, [props.success])

    const savePatient = (values: PatientValue) => {
        dispatch({ type: PATIENT_SAVE, payload: values })
    }

    return (
        <div className="d-flex align-items-center justify-content-center h-100">
            {console.log('props', props)}
            <PatientFormView
                patient={props.patient}
                savePatient={savePatient}
                success={success}
                error={error} />
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    patient: state.patient && state.patient.patientDetail && state.patient.patientDetail.data,
    success: state.patient && state.patient.patientDetail && state.patient.patientDetail.success,
    error: state.patient && state.patient.patientDetail && state.patient.patientDetail.error,
});

export default connect(mapStateToProps)(PatientForm);
