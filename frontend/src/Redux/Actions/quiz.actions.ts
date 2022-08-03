import {
    HOMEPAGE_LOAD_QUIZ_REQUEST,
    HOMEPAGE_LOAD_QUIZ_SUCCESS,
    HOMEPAGE_LOAD_QUIZ_FAILED,
    LOAD_QUIZ_REQUEST,
    LOAD_QUIZ_SUCCESS,
    LOAD_QUIZ_FAILED
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