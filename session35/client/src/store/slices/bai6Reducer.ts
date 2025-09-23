import { createSlice } from "@reduxjs/toolkit";

export const bai6Reducer = createSlice({
    name: "bai6",
    initialState: true,
    reducers:{
        switchMode: (state)=>{
            return !state
        }
    }
});
export default bai6Reducer.reducer
export const bai6 = bai6Reducer.actions