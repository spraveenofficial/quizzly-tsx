import { combineReducers } from "redux";
import { auth, login, register } from "./auth.reducers";



export default combineReducers({
    login,
    register,
    auth
})