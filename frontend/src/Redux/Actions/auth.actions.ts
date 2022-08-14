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
} from "../Constants/auth.constant";


import axios from "../../interceptor";



interface AxiosResponse {
    data: any;
    success: boolean;
    token: string;
    message: string;
}


interface UserInput {
    email: string;
    password: string;
    name?: string;
    checkbox?: boolean;
}


export const loginUser = (payload: UserInput) => async (dispatch: any) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        });
        const { data } = await axios.post<AxiosResponse>("/login", payload);
        if (!data.success) {
            return dispatch({
                type: USER_LOGIN_FAIL,
                payload: data.message
            })
        }
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data.message,
        });
        localStorage.setItem("token", data.token)
        return data;
    } catch (error: any) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}


export const registerUser = (payload: UserInput) => async (dispatch: any) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        });
        const { data } = await axios.post<AxiosResponse>("/signup", payload);
        if (!data.success) {
            return dispatch({
                type: USER_REGISTER_FAIL,
                payload: data.message
            })
        }
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data.message,
        });
        localStorage.setItem("token", data.token);
    } catch (error: any) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}


export const loadUser = () => async (dispatch: any) => {
    try {
        dispatch({
            type: USER_LOAD_REQUEST,
        });
        const { data } = await axios.get<AxiosResponse>("/verify")
        if (!data.success) {
            localStorage.removeItem("token");
            dispatch({
                type: USER_LOAD_FAILURE,
            });
        } else {
            dispatch({
                type: USER_LOAD_SUCCESS,
                payload: data.data,
            });
        }
    } catch (error) {
        localStorage.removeItem("token");
        dispatch({
            type: USER_LOAD_FAILURE,
        });
    }

};

export const handleLogout = () => (dispatch: any) => {
    console.log("loggedout")
    dispatch({
        type: USER_LOGOUT,
    });
    return localStorage.removeItem("token");
}