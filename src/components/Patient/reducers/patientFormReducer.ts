import { PATIENT_DETAIL_FAILED, PATIENT_DETAIL_SUCCESS, PATIENT_REDIRECT, PATIENT_SAVE_FAILED, PATIENT_SAVE_SUCCESS } from "../actions/patientActions";

interface PatientDetailStateType {
    data: any;
    success: boolean;
    error: string;
}

const initalState: PatientDetailStateType = {
    data: null,
    success: false,
    error: ''
}

const PatientFormReducer = (state: PatientDetailStateType = initalState, action: any) => {
    switch (action.type) {
        case PATIENT_SAVE_SUCCESS:
            return {
                ...state,
                success: true,
                error: ''
            }
        case PATIENT_SAVE_FAILED:
            return {
                ...state,
                success: false,
                error: action.payload
            }
        case PATIENT_DETAIL_SUCCESS:
            return {
                ...state,
                data: action.payload,
                success: false,
                error: ''
            }
        case PATIENT_DETAIL_FAILED:
            return {
                ...state,
                data: null,
                success: false,
                error: action.payload
            }
        case PATIENT_REDIRECT:
            return {
                ...state,
                data: null,
                success: false,
                error: ''
            }
        default:
            return state;

    }
}

export default PatientFormReducer;