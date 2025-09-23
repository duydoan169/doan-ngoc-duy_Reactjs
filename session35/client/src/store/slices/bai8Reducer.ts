import { createSlice } from "@reduxjs/toolkit";

export const bai8Reducer = createSlice({
  name: "bai8",
  initialState: {
    email: "",
    password: "",
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.email=action.payload.email;
      state.password=action.payload.password;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.email="";
      state.password="";
      state.isLoggedIn=false;
    },
  }
});
export default bai8Reducer.reducer;
export const bai8 = bai8Reducer.actions;