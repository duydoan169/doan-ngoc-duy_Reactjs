import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRouter({ element }: { element: React.ReactElement }) {
    const isLogin = true;
    const validate=()=>{
        if(!isLogin){
            return <Navigate to={"/login"}></Navigate>
        }
        return element;
    }
  return (
    <div>
      {validate()}
    </div>
  )
}

