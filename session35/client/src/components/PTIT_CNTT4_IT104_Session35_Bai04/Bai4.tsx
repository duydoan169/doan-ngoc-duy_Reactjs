/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bai4 } from '../../store/slices/bai4Reducer';

export default function Bai4() {
    const result = useSelector((data: any) =>{
        return data.bai4;
    });
    const dispatch=useDispatch();
  return (
    <div>
      <button onClick={()=>dispatch(bai4.switchMode())}>{result ? "List mode" : "Grid mode"}</button>
      <div style={result ? {display: "flex", flexDirection: "column", gap: "15px"} : {display: "flex", flexDirection: "row", gap: "15px"}}>
        <div style={{backgroundColor: "tomato", width: "200px", height: "40px"}}>1</div>
        <div style={{backgroundColor: "tomato", width: "200px", height: "40px"}}>2</div>
        <div style={{backgroundColor: "tomato", width: "200px", height: "40px"}}>3</div>
        <div style={{backgroundColor: "tomato", width: "200px", height: "40px"}}>4</div>
        <div style={{backgroundColor: "tomato", width: "200px", height: "40px"}}>5</div>
      </div>
    </div>
  )
}
