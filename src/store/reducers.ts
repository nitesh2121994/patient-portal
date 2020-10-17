import { combineReducers } from "redux";
import loginReducer from "../components/login/reducer/loginReducer";
import rootPatientReducer from "../components/Patient/reducers/rootPatientReducer";
import signupReducer from "../components/signup/reducer/signupReducer";

const combineReducer: any = { 
    login: loginReducer,
    signup: signupReducer,
    patient: rootPatientReducer
 };

const rootReducer: any = combineReducers(combineReducer);

export default rootReducer;