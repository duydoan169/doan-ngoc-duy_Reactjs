import { combineReducers } from "redux";
import { bai1Reducer } from "./bai1Reducer";
import { bai2Reducer } from "./bai2Reducer";
import { bai3Reducer } from "./bai3Reducer";
import { bai4Reducer } from "./bai4Reducer";
import { bai5Reducer } from "./bai5Reducer";
import { bai6Reducer } from "./bai6Reducer";
import { bai78Reducer } from "./bai78Reducer";

export const rootReducer = combineReducers({
    bai1: bai1Reducer,
    bai2: bai2Reducer,
    bai3: bai3Reducer,
    bai4: bai4Reducer,
    bai5: bai5Reducer,
    bai6: bai6Reducer,
    bai78: bai78Reducer
})