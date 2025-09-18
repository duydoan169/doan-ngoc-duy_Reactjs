/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Bai3() {
    const result = useSelector((data: any) =>{
        return data.bai3.count
    })
    const dispatch=useDispatch();

  return (
    <div>
      <h1>Counter: {result}</h1>
      <button onClick={()=>dispatch({type: "increase"})}>Tang</button>
      <button onClick={()=>dispatch({type: "decrease"})}>Giam</button>
    </div>
  )
}
