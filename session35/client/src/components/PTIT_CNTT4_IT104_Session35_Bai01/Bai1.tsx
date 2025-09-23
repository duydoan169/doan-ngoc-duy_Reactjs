/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bai1 } from '../../store/slices/bai1Reducer';

export default function Bai1() {
    const result = useSelector((data: any)=>{
        return data.bai1.count
    });
    const dispatch=useDispatch();
  return (
    <div>
      <h1>Count: {result}</h1>
      <br />
      <button onClick={()=>dispatch(bai1.increment())}>Tang</button>
      <button onClick={()=>dispatch(bai1.decrement())}>Giam</button>
      <button onClick={()=>dispatch(bai1.reset())}>Reset</button>
    </div>
  )
}
