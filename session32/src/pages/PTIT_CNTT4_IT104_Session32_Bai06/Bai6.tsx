/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Bai6() {
    const dispatch=useDispatch();
    const result = useSelector((data: any)=>{
        return data.bai6.isDarkMode;
    })
  return (
    <div style={result ? {backgroundColor: "black", color: "white", width: "300px", height: "300px"} : {backgroundColor: "white", color: "black", width: "300px", height: "300px"}}>
        <input type="checkbox" checked={result} onChange={()=>dispatch({type: "changeMode"})}/>
        <label htmlFor="">{result? "Toi" : "Sang"}</label>
    </div>
  )
}
