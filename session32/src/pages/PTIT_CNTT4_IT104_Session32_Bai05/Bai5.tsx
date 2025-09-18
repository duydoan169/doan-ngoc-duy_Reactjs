/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Bai5() {
    const dispatch=useDispatch();
    const result = useSelector((data: any)=>{
        return data.bai5.isRikkeiSoft;
    })
  return (
    <div>
      <h1>{result? "RikkeiSoft" : "Rikkei Academy"}</h1>
      <button onClick={()=>dispatch({type: "change"})}>Change state</button>
    </div>
  )
}
