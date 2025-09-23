import { createSlice } from "@reduxjs/toolkit";

export const bai1Reducer = createSlice({
    name: "bai1",
    initialState:{
        count: 0
    },
    reducers: {
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        reset: (state)=>{
            state.count=0;
        }
    }
});
export const bai1 = bai1Reducer.actions
export default bai1Reducer.reducer