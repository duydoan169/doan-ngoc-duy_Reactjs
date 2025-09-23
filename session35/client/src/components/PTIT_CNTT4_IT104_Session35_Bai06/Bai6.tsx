/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bai6 } from '../../store/slices/bai6Reducer';

export default function Bai6() {
    const result = useSelector((data: any) =>{
        return data.bai6;
    });
    const dispatch=useDispatch();
  return (
    <div>
      <select onChange={()=>dispatch(bai6.switchMode())}>
        <option value="1">English</option>
        <option value="2">Vietnamese</option>
      </select>
      <h2>{result ? "Rikkei Academy" : "Hoc vien Rikkei"}</h2>
    </div>
  )
}
