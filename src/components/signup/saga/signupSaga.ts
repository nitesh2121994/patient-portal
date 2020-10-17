import { call, put, takeLatest } from "redux-saga/effects"
import { SIGNUP, SIGNUP_FAILED, SIGNUP_SUCCESS } from "../actions/signupAction";
import { signup } from "../service/signupService";

function* login(action: any) {
   try {
      const data = yield call(signup, action.payload)
      yield put({ type: SIGNUP_SUCCESS });      
   } catch (error) {
      yield put({ type: SIGNUP_FAILED, payload: error })
   }
}

export function* watchSignup() {
   yield takeLatest(SIGNUP, login)
}