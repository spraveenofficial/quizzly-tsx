import { combineReducers } from "redux";
import { auth, login, register } from "./auth.reducers";
import { homePageQuiz } from "./quiz.reducers";


export default combineReducers({
    login,
    register,
    auth,
    homePageQuiz
})