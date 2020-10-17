import { call, put, takeLatest } from "redux-saga/effects"
import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from "../actions/loginAction"
import { userLogin } from "../service/loginService"

function* login(action: any) {
   try {
      const data = yield call(userLogin, action.payload)
      yield put({ type: USER_LOGIN_SUCCESS });
      localStorage.setItem('token', btoa(action.payload.email));
      
   } catch (error) {
      yield put({ type: USER_LOGIN_FAILED, payload: error })
   }
}

export function* watchLogin() {
   yield takeLatest(USER_LOGIN, login)
}