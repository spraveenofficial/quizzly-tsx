import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
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