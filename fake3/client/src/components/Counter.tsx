/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/slices/counterSlice';

export default function Counter() {
    const result = useSelector((data: any) =>{
        return data.counter.value;
    });
    const dispatch=useDispatch();
    const increase=()=>{
        dispatch(increment());
    }
    const decrease=()=>{
        dispatch(decrement());
    }
  return (
    <div>
      <h1>gia tri count: {result}</h1> <br />
      <button onClick={increase}>Tang</button>
      <button onClick={decrease}>Giam</button>
    </div>
  )
}
