/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bai8 } from '../../store/slices/bai8Reducer';

export default function Bai8() {
    const result = useSelector((data: any) =>{
        return data.bai8;
    });
    const dispatch=useDispatch();
    const [user, setUser] = useState<{email: string, password: string}>({email: "", password: ""});
  return (
    <div>
      {!result.isLoggedIn ? 
      <div>
        <h1>Login Form</h1>
        <label htmlFor="">Email: </label> <br />
        <input onChange={(e) => setUser({...user, email: e.target.value})} value={user.email} type="text" name='email' /> <br />
        <label htmlFor="">Password: </label> <br />
        <input onChange={(e) => setUser({...user, password: e.target.value})} value={user.password} type="text" name='password'/> <br />
        <button onClick={()=>dispatch(bai8.login(user))}>Login</button>
      </div> : 
      <div>
        <h3>Email: {result.email}</h3>
        <h3>Password: {result.password}</h3>
        <button onClick={()=>dispatch(bai8.logout())}>Logout</button>
        </div>}
    </div>
  )
}
