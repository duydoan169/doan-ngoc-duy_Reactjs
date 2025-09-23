/* eslint-disable @typescript-eslint/no-explicit-any */
import { HeartOutlined } from '@ant-design/icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bai7 } from '../../store/slices/bai7Reducer';

export default function Bai7() {
    const result = useSelector((data: any) =>{
        return data.bai7;
    });
    const dispatch=useDispatch();
  return (
    <div>
        <h1>List Favourite User</h1>
      <div style={{display: "flex", gap: "15px", flexDirection: "column"}}>
        {result.map((item: any) =>{
        return <div key={item.id}>
            <div>UserName: {item.name}</div>
            <div style={{display: "flex", gap: "5px"}}>Favourites: <div onClick={()=>dispatch(bai7.changeFavourite(item.id))} style={item.isFavourite ? {color: "deeppink"} : {color: "black"}}><HeartOutlined /></div></div>
        </div>
      })}
      </div>
    </div>
  )
}
