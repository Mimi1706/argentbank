import { combineReducers } from "redux"
import isloggedReducer from "./islogged"
import getUserInfosReducer from "./getUserInfos"

const allReducers = combineReducers({ isloggedReducer, getUserInfosReducer })

export default allReducers
