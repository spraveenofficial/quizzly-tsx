import { ReducersAction, ReducerState } from "../../Types/global-interfaces";
import {
    HOMEPAGE_LOAD_QUIZ_REQUEST,
    HOMEPAGE_LOAD_QUIZ_SUCCESS,
    HOMEPAGE_LOAD_QUIZ_FAILED,
} from "../Constants/quiz.constant"

export const homePageQuiz = (
    state: ReducerState = { loading: false, success: false, quiz: [] },
    action: ReducersAction
) => {
    switch (action.type) {
        case HOMEPAGE_LOAD_QUIZ_REQUEST:
            return { loading: true };
        case HOMEPAGE_LOAD_QUIZ_SUCCESS:
            return { loading: false, success: true, quiz: action.payload };
        case HOMEPAGE_LOAD_QUIZ_FAILED:
            return { loading: false, success: false, quiz: null };
        default:
            return state;
    }
};