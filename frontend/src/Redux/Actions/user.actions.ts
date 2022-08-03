import {
    LEADERBOARD_REQUEST,
    LEADERBOARD_REQUEST_SUCCESS,
    LEADERBOARD_REQUEST_FAILED
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
    } catch (error) {
        dispatch({
            type: LEADERBOARD_REQUEST_FAILED,
            payload: error
        })
    }
}