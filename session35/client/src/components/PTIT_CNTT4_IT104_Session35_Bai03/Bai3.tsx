/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bai3 } from '../../store/slices/bai3Reducer';

export default function Bai3() {
    const result = useSelector((data: any) =>{
        return data.bai3;
    });
    const dispatch=useDispatch();
  return (
    <div style={result ? {backgroundColor: "white", width: "100px", height: "100px"} : {backgroundColor: "black", width: "100px", height: "100px"}}>
      <button style={result ? {backgroundColor: "transparent", border: "1px solid black", color: 'black'} : {backgroundColor: "transparent", border: "1px solid white", color: "white"}} onClick={()=>dispatch(bai3.switchMode())}>{result ? "Light" : "Dark"}</button>
    </div>
  )
}
