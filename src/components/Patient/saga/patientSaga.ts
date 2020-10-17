import { all, call, put, takeLatest } from "redux-saga/effects"
import { PATIENT_DELETE, PATIENT_DELETE_FAILED, PATIENT_DELETE_SUCCESS, PATIENT_DETAIL, PATIENT_DETAIL_FAILED, PATIENT_DETAIL_SUCCESS, PATIENT_LIST, PATIENT_LIST_FAILED, PATIENT_LIST_SUCCESS, PATIENT_SAVE, PATIENT_SAVE_FAILED, PATIENT_SAVE_SUCCESS } from "../actions/patientActions";
import { deletePatientDetail, getPatientDetail, getPatientList, savePatientDetails } from "../service/patientService";



function* fetchPatientList(action: any) {
    try {
        const data = yield call(getPatientList)
        yield put({ type: PATIENT_LIST_SUCCESS, payload: data });

    } catch (error) {
        yield put({ type: PATIENT_LIST_FAILED, payload: error })
    }
}

function* deletePatient(action: any) {
    try {
        const data = yield call(deletePatientDetail, action.payload)
        yield put({ type: PATIENT_DELETE_SUCCESS });

    } catch (error) {
        yield put({ type: PATIENT_DELETE_FAILED, payload: error })
    }
}

function* savePatient(action: any) {
    try {
        const data = yield call(savePatientDetails, action.payload)
        yield put({ type: PATIENT_SAVE_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: PATIENT_SAVE_FAILED, payload: error })
    }
}

function* getPatient(action: any) {
    try {
        const data = yield call(getPatientDetail, action.payload)
        yield put({ type: PATIENT_DETAIL_SUCCESS, payload: data });

    } catch (error) {
        yield put({ type: PATIENT_DETAIL_FAILED, payload: error })
    }
}

function* watchPatientList() {
    yield takeLatest(PATIENT_LIST, fetchPatientList)
}

function* watchPatientSave() {
    yield takeLatest(PATIENT_SAVE, savePatient)
}

function* watchPatientDetail() {
    yield takeLatest(PATIENT_DETAIL, getPatient)
}

function* deletePatientDetails() {
    yield takeLatest(PATIENT_DELETE, deletePatient)
}

export function* watchPatient() {
    yield all([
        watchPatientList(),
        watchPatientSave(),
        watchPatientDetail(),
        deletePatientDetails()
    ]);
}
