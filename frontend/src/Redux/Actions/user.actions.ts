import {
    LEADERBOARD_REQUEST,
    LEADERBOARD_REQUEST_SUCCESS,
    LEADERBOARD_REQUEST_FAILED,
    USER_RECENT_QUIZ_REQUEST,
    USER_RECENT_QUIZ_SUCCESS,
    USER_RECENT_QUIZ_FAILED
} from "../Constants/user.constant"
import axios from "../../interceptor"
import { AxiosQuizResponse } from "../../Types/global-interfaces";

export const fetchLeaderBoard = () => async (dispatch: any) => {
    dispatch({ type: LEADERBOARD_REQUEST });
    try {
        const { data } = await axios.get<AxiosQuizResponse>("/leaderboard");
        if (data.success) {
            dispatch({
                type: LEADERBOARD_REQUEST_SUCCESS,
                payload: data.data
            });
            return
        }
        dispatch({
            type: LEADERBOARD_REQUEST_FAILED,
            payload: data
        })
    } catch (error: any) {
        dispatch({
            type: LEADERBOARD_REQUEST_FAILED,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}


export const fetchUserRecentQuiz = () => async (dispatch: any) => {
    dispatch({
        type: USER_RECENT_QUIZ_REQUEST
    })
    try {
        const { data } = await axios.get<AxiosQuizResponse>("/recent-quiz");
        if (data.success) {
            return dispatch({
                type: USER_RECENT_QUIZ_SUCCESS,
                payload: data.data
            })
        }
        return dispatch({
            type: USER_RECENT_QUIZ_FAILED,
            payload: data
        })
    } catch (error: any) {
        dispatch({
            type: USER_RECENT_QUIZ_FAILED,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
} 