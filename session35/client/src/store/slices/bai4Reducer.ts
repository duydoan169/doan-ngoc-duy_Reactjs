import { createSlice } from "@reduxjs/toolkit";

export const bai4Reducer = createSlice({
    name: "bai4",
    initialState: true,
    reducers:{
        switchMode: (state)=>{
            return !state
        }
    }
});
export default bai4Reducer.reducer
export const bai4 = bai4Reducer.actions