import { combineReducers } from "redux";
import { auth, login, register } from "./auth.reducers";
import { homePageQuiz, quiz, playQuiz } from "./quiz.reducers";
import { leaderBoard, user } from "./user.reducers";

export default combineReducers({
    login,
    register,
    auth,
    homePageQuiz,
    quiz,
    leaderboard: leaderBoard,
    playQuiz,
    user
})