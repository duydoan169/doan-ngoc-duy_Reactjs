import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
    name: "student",
    initialState: {
        student: [
            {id: 1, name: "Nguyen Van A"},
            {id: 2, name: "Nguyen Thi B"}
        ]
    },
    reducers: {
        saveStudent: (state, action)=>{
            state.student.push(action.payload); 
        }
    }
});
export const {saveStudent} = studentSlice.actions;
export default studentSlice.reducer;