import { combineReducers } from "redux";
import patientFormReducer from "./patientFormReducer";
import patientListReducer from "./patientListReducer";

const combineReducer: any = { 
    patientDetail: patientFormReducer,
    patientList: patientListReducer,
 };

const rootPatientReducer: any = combineReducers(combineReducer);

export default rootPatientReducer;