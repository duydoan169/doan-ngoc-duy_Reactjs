import { createSlice } from "@reduxjs/toolkit";

export const bai3Reducer = createSlice({
    name: "bai3",
    initialState: true,
    reducers:{
        switchMode: (state)=>{
            return !state
        }
    }
});
export default bai3Reducer.reducer
export const bai3 = bai3Reducer.actions