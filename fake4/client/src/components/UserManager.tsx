/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getAllUsers, updateUser } from '../store/slices/userSlice';

export default function UserManager() {
    const result = useSelector((data: any)=>{
        return data.users.user
    })
    const dispatch: any = useDispatch();
    useEffect(()=>{
        dispatch(getAllUsers());
    }, [])
  return (
    <div>
      <h1>Quan ly user</h1>
      <ul>
        {result.map((item: any) =>{
            return <li key={item.id}>{item.name} <button onClick={()=>dispatch(deleteUser(item.id))}>Xoa</button> <button onClick={()=>dispatch(updateUser(item.id))}>Sua</button></li>
        })}
      </ul>
    </div>
  )
}
