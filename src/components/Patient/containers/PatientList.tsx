import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PATIENT_DELETE, PATIENT_LIST } from "../actions/patientActions";
import PatientListView from "../presentations/PatientListView";

const PatientList = (props: any) => {

    useEffect(() => {
        props.dispatch({ type: PATIENT_LIST })
    }, [])

    useEffect(() => {
        if (props.deleteSuccess) {
            props.dispatch({ type: PATIENT_LIST })
        }
    }, [props.deleteSuccess])

    const onDelete = (id: any) => {
        props.dispatch({ type: PATIENT_DELETE, payload: id })
    }

    return (
        <>
        {console.log(props)}
            <PatientListView
                patientList={props.patientList}
                onDelete={onDelete}
                deleteSuccess={props.deleteSuccess}
            />
        </>
    )
}

const mapStateToProps = (state: any) => ({
    patientList: state.patient && state.patient.patientList && state.patient.patientList.data,
    success: state.patient && state.patient.patientList && state.patient.patientList.success,
    error: state.patient && state.patient.patientList && state.patient.patientList.error,
    deleteSuccess: state.patient && state.patient.patientList && state.patient.patientList.deleteSuccess,
});

export default connect(mapStateToProps)(PatientList);