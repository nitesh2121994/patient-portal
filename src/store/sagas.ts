import { all } from "redux-saga/effects";
import { watchLogin } from "../components/login/saga/loginSaga";
import { watchPatient } from "../components/Patient/saga/patientSaga";
import { watchSignup } from "../components/signup/saga/signupSaga";

export function* rootSaga() {
    yield all([
        watchLogin(),
        watchSignup(),
        watchPatient()
    ]);
}

export default rootSaga;