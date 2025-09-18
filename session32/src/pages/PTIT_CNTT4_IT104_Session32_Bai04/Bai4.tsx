/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Bai4() {
    const dispatch=useDispatch();
    const result = useSelector((data: any)=>{
        return data.bai4.numbers
    })
  return (
    <div>
      <h1>[{result.join(", ")}]</h1>
      <button onClick={()=>dispatch({type: "random"})}>Generate random number</button>
    </div>
  )
}
