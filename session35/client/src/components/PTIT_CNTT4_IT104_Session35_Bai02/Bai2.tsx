/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bai2 } from '../../store/slices/bai2Reducer';

export default function Bai2() {
    const result = useSelector((data: any) =>{
        return data.bai2;
    });
    const dispatch=useDispatch();
  return (
    <div>
      <h1>List Number: [{result.join(", ")}]</h1>
      <button onClick={()=>dispatch(bai2.random())}>Random number</button>
    </div>
  )
}
