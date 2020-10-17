import { SIGNUP_FAILED, SIGNUP_SUCCESS } from "../actions/signupAction";

interface SignupStateType {
    success: boolean;
    error: string;
}

const initalState: SignupStateType = {
    success: false,
    error: ''
}

const signupReducer = (state: SignupStateType = initalState, action: any) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
            return {
                ...state,
                success: true,
                error: ''
            }
        case SIGNUP_FAILED:
            return {
                ...state,
                success: false,
                error: action.payload
            }

        default:
            return state;
    }
}

export default signupReducer;