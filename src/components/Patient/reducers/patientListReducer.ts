import { PATIENT_DELETE_FAILED, PATIENT_DELETE_SUCCESS, PATIENT_LIST_FAILED, PATIENT_LIST_SUCCESS } from "../actions/patientActions";

interface PatientListStateType {
    data: any[];
    success: boolean;
    error: string;
    deleteSuccess?: boolean;
}

const initalState: PatientListStateType = {
    data: [],
    success: false,
    error: '',
    deleteSuccess: false
}

const patientListReducer = (state: PatientListStateType = initalState, action: any) => {
    switch (action.type) {
        case PATIENT_LIST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                success: true,
                error: ''
            }
        case PATIENT_LIST_FAILED:
            return {
                ...state,
                success: false,
                error: action.payload
            }
        case PATIENT_DELETE_SUCCESS:
            return {
                ...state,
                deleteSuccess: true,
                error: ''
            }
        case PATIENT_DELETE_FAILED:
            return {
                ...state,
                deleteSuccess: false,
                error: action.payload
            }

        default:
            return state;

    }
}

export default patientListReducer;