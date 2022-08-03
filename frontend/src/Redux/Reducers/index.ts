import { combineReducers } from "redux";
import { auth, login, register } from "./auth.reducers";
import { homePageQuiz, quiz } from "./quiz.reducers";
import { leaderBoard } from "./user.reducers";

export default combineReducers({
    login,
    register,
    auth,
    homePageQuiz,
    quiz,
    leaderboard: leaderBoard
})