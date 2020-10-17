import { PATIENT_DETAIL_FAILED, PATIENT_DETAIL_SUCCESS } from "../actions/patientActions";

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

const patientDetailReducer = (state: PatientDetailStateType = initalState, action: any) => {
    switch (action.type) {
        case PATIENT_DETAIL_SUCCESS:
            return {
                ...state,
                data: action.payload,
                success: true,
                error: ''
            }
        case PATIENT_DETAIL_FAILED:
            return {
                ...state,
                success: false,
                error: action.payload
            }

        default:
            return state;

    }
}

export default patientDetailReducer;