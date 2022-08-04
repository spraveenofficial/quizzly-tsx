import {
    HOMEPAGE_LOAD_QUIZ_REQUEST,
    HOMEPAGE_LOAD_QUIZ_SUCCESS,
    HOMEPAGE_LOAD_QUIZ_FAILED,
    LOAD_QUIZ_REQUEST,
    LOAD_QUIZ_SUCCESS,
    LOAD_QUIZ_FAILED,
    SCORE_CHANGE,
    SET_SCORE_NULL,
    SET_QUIZ_TIMER,
    SELECT_ANSWER,
    ADD_QUIZ_REQUEST,
    ADD_QUIZ_REQUEST_SUCCESS,
    ADD_QUIZ_REQUEST_FAILED,
} from "../Constants/quiz.constant"
import { AxiosQuizResponse } from "../../Types/global-interfaces"
import axios from "../../interceptor"


export const fetchHomePageQuiz = () => async (dispatch: any) => {
    try {
        dispatch({
            type: HOMEPAGE_LOAD_QUIZ_REQUEST,
        });
        const { data } = await axios.get<AxiosQuizResponse>("/quiz");
        if (!data.success) {
            return dispatch({
                type: HOMEPAGE_LOAD_QUIZ_FAILED,
                payload: data.message
            })
        }
        dispatch({
            type: HOMEPAGE_LOAD_QUIZ_SUCCESS,
            payload: data.data,
        });
    } catch (error: any) {
        dispatch({
            type: HOMEPAGE_LOAD_QUIZ_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}



export const fetchEachQuiz = (quizId: string | undefined) => async (dispatch: any) => {
    try {
        dispatch({
            type: LOAD_QUIZ_REQUEST,
        });
        const { data } = await axios.get<AxiosQuizResponse>(`/quiz/${quizId}`);
        if (!data.success) {
            return dispatch({
                type: LOAD_QUIZ_FAILED,
                payload: data.message
            })
        }
        dispatch({
            type: LOAD_QUIZ_SUCCESS,
            payload: data.data,
        });
    } catch (error: any) {
        dispatch({
            type: LOAD_QUIZ_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}


export const scoreChange = (score: number) => async (dispatch: any) => {
    dispatch({
        type: SCORE_CHANGE,
        payload: score,
    });
};

export const setBacktoNull = () => async (dispatch: any) => {
    dispatch({
        type: SET_SCORE_NULL,
    });
};

export const SelectAnswer = (id: string, option: string) => async (dispatch: any) => {
    dispatch({
        type: SELECT_ANSWER,
        payload: { id: id, option: option },
    });
};

export const SetTimer = (time: number) => async (dispatch: any) => {
    dispatch({
        type: SET_QUIZ_TIMER,
        payload: time,
    });
};


export const addQuiz = (payload: any) => async (dispatch: any) => {
    try {
        dispatch({
            type: ADD_QUIZ_REQUEST,
        });
        const { data } = await axios.post<AxiosQuizResponse>("/create-quiz", payload);
        if (!data.success) {
            return dispatch({
                type: ADD_QUIZ_REQUEST_FAILED,
                payload: data.message
            })
        }
        dispatch({
            type: ADD_QUIZ_REQUEST_SUCCESS,
            payload: data.data,
        });
    } catch (error: any) {
        dispatch({
            type: ADD_QUIZ_REQUEST_FAILED,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
}