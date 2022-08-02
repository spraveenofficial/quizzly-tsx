import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOAD_FAILURE,
    USER_LOGOUT
} from "../Constants/auth.constant"
import { AuthState, ReducersAction, ReducerState } from "../../Types/global-interfaces";

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

export const register = (state: ReducerState = { loading: false, success: false, message: "", }, action: ReducersAction) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false, message: action.payload, success: true };
        case USER_REGISTER_FAIL:
            return { loading: false, message: action.payload, success: false };
        default:
            return state;
    }
}


export const auth = (state: AuthState = { isAuthenticated: false, loading: true, user: null }, action: ReducersAction) => {
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return {...state, loading: true} ;
        case USER_LOAD_SUCCESS:
            return { isAuthenticated: true, loading: false, user: action.payload };
        case USER_LOAD_FAILURE:
            return { isAuthenticated: false, loading: false, user: null };
        case USER_LOGOUT:
            return { isAuthenticated: false, loading: false, user: null };
        default:
            return state;
    }
}