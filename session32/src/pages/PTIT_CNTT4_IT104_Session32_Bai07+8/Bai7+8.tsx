/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Bai78() {
    const dispatch=useDispatch();
    const result = useSelector((data: any)=>{
        return data.bai78;
    })
  return (
    <div>
      <h1>{result.isLogin ? "Dang nhap" : "Dang ky"}</h1>
      <input onChange={(e) => dispatch({type: "email", payload: e.target.value})} type="text" placeholder='Nhap email'/><br />
      <input onChange={(e) => dispatch({type: "password", payload: e.target.value})} type="text" placeholder='Nhap mat khau'/><br />
      <button onClick={()=>result.isLogin ? dispatch({type: "login"}) : dispatch({type: "signup"})}>{result.isLogin ? "Dang nhap" : "Dang ky"}</button>
    </div>
  )
}
