/* eslint-disable @typescript-eslint/no-explicit-any */
import { DashboardOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bai5 } from '../../store/slices/bai5Reducer';

export default function Bai5() {
     const result = useSelector((data: any) =>{
        return data.bai5;
    });
    const dispatch=useDispatch();
  return (
    <div style={result ? {padding: "10px", backgroundColor: "darkblue", display: "flex", flexDirection: "column", gap: "10px", width: '130px', color: "white"} : {padding: "10px", backgroundColor: "darkblue", display: "flex", flexDirection: "column", gap: "10px" , width: '20px', color: "white"}}>
      <div><DashboardOutlined /> {result ? "Bang dieu khien" : ""}</div>
      <div><DashboardOutlined /> {result ? "Bang dieu khien" : ""}</div>
      <div><DashboardOutlined /> {result ? "Bang dieu khien" : ""}</div>
      <div><DashboardOutlined /> {result ? "Bang dieu khien" : ""}</div>
      <div><DashboardOutlined /> {result ? "Bang dieu khien" : ""}</div>
      <div onClick={()=>dispatch(bai5.switchMode())}>{result ? <div><LeftOutlined /> Thu gon</div> : <div><RightOutlined /></div>}</div>
    </div>
  )
}
