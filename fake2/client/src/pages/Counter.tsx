/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
    const dispatch=useDispatch();

    const result: any = useSelector((data: any) => {
        console.log(data);
        return data.counter;
    })
  return (
    <div>
      <h1>Ung dung counter</h1>
      <p>gia tri count: {result.count}</p>
      <button onClick={()=>dispatch({type: "increment"})}>tang</button>
      <button onClick={()=>dispatch({type: "decrement"})}>giam</button>
    </div>
  )
}
