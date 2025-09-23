import { createSlice } from "@reduxjs/toolkit";

export const bai5Reducer = createSlice({
    name: "bai5",
    initialState: true,
    reducers:{
        switchMode: (state)=>{
            return !state
        }
    }
});
export default bai5Reducer.reducer
export const bai5 = bai5Reducer.actions