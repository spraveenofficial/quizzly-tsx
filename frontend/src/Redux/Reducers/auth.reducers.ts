import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from "../Constants/auth.constant"
import { ReducersAction, ReducerState } from "../../Types/global-interfaces";

export const login = (state: ReducerState = { loading: false, success: false, message: "", }, action: ReducersAction) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, message: action.payload, success: true };
        case USER_LOGIN_FAIL:
            return { loading: false, message: action.payload, success: false };
        default:
            return state;
    }
}