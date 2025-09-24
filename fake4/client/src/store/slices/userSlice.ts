/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//ham lay du lieu tren server
export const getAllUsers = createAsyncThunk("getAllUser", async ()=>{
    try{
        const response = await axios.get("http://localhost:8080/users");
        return response.data
    }catch(error){
        console.log(error);
    }
})
export const deleteUser=createAsyncThunk("deleteUser", async (id: number)=>{
    try{
        await axios.delete(`http://localhost:8080/users/${id}`);
        return id
    }catch(error){
        console.log(error);
    }
})
export const updateUser=createAsyncThunk("updateUser", async (id: number)=>{
    const name=prompt("nhap thong tin moi");
    try{
        const response = await axios.put(`http://localhost:8080/users/${id}`, {id: id, name: name});
        return response.data
    }catch(error){
        console.log(error);
    }
})
const initialUser: {id: number, name: string}[]=[]
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: initialUser
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(getAllUsers.pending, ()=>{
            console.log("dang su li");
        })
        .addCase(getAllUsers.fulfilled, (state, action)=>{
            console.log("lay du lieu thanh cong");
            console.log(state);
            console.log(action);
            state.user=action.payload
        })
        .addCase(getAllUsers.rejected, ()=>{
            console.log("lay du lieu that bai");
        })
        .addCase(deleteUser.fulfilled, (state, action)=>{
            state.user=state.user.filter((item: any) => item.id != action.payload);
        })
        .addCase(deleteUser.rejected, ()=>{
            console.log("xoa user that bai");
        })
        .addCase(updateUser.fulfilled, (state, action)=>{
            state.user=state.user.map((item: any) => {return item.id==action.payload.id ? action.payload : item});
        })
    }
})
export default userSlice.reducer;