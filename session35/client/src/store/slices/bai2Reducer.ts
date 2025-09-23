import { createSlice } from "@reduxjs/toolkit";
const initialState: number[] = [];
export const bai2Reducer = createSlice({
    name: "bai2",
    initialState,
    reducers: {
        random: (state)=>{
            state.push(Math.floor(Math.random()*100));
        }
    }
});
export default bai2Reducer.reducer
export const bai2 = bai2Reducer.actions