import { createSlice } from "@reduxjs/toolkit";

export const bai7Reducer = createSlice({
    name: "bai7",
    initialState: [
        {id: 1, name: "Nguyen Van A", isFavourite: true},
        {id: 2, name: "Nguyen Van B", isFavourite: false},
        {id: 3, name: "Nguyen Van C", isFavourite: true},
        {id: 4, name: "Nguyen Van D", isFavourite: true},
    ],
    reducers: {
        changeFavourite: (state, action)=>{
            return state.map((item) =>{return item.id == action.payload ?  {...item, isFavourite: !item.isFavourite} : item});
        }
    }
})
export default bai7Reducer.reducer;
export const bai7 = bai7Reducer.actions;