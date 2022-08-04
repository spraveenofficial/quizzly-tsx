import { ReducersAction, ReducerState } from "../../Types/global-interfaces"

import {
    LEADERBOARD_REQUEST,
    LEADERBOARD_REQUEST_SUCCESS,
    LEADERBOARD_REQUEST_FAILED,
    USER_RECENT_QUIZ_REQUEST,
    USER_RECENT_QUIZ_SUCCESS,
    USER_RECENT_QUIZ_FAILED
} from "../Constants/user.constant"


export const leaderBoard = (
    state: ReducerState = { loading: false, success: false, data: [] },
    action: ReducersAction
) => {
    switch (action.type) {
        case LEADERBOARD_REQUEST:
            return { loading: true };
        case LEADERBOARD_REQUEST_SUCCESS:
            return { loading: false, success: true, data: action.payload };
        case LEADERBOARD_REQUEST_FAILED:
            return { loading: false, success: false, data: null };
        default:
            return state;
    }
}


export const user = (state: ReducerState = { loading: false, success: false, data: null }, action: ReducersAction) => {
    switch (action.type) {
        case USER_RECENT_QUIZ_REQUEST:
            return { ...state, loading: true, success: false, data: null };
        case USER_RECENT_QUIZ_SUCCESS:
            return { loading: false, success: true, data: action.payload };
        case USER_RECENT_QUIZ_FAILED:
            return { loading: false, success: false, data: null };
        default:
            return state;
    }
}

