import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS } from "../actions/loginAction";

interface LoginStateType {
    success: boolean;
    error: string;
}

const initalState: LoginStateType = {
    success: false,
    error: ''
}

const loginReducer = (state: LoginStateType = initalState, action: any) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                error: ''
            }
        case USER_LOGIN_FAILED:
            return {
                ...state,
                success: false,
                error: action.payload
            }

        default:
            return state;

    }
}

export default loginReducer;