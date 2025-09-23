import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice"
import students from './slices/studentSlice'
export const store = configureStore({
    reducer: {
        counter,
        students
    }
})