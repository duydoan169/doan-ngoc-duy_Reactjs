import { combineReducers } from "redux";
import { reducerCounter } from "./ReducerCounter";
import { reducerStudents } from "./ReducerStudents";

export const rootReducer = combineReducers({
    counter: reducerCounter,
    students: reducerStudents
})