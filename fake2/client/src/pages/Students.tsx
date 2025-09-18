/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'

export default function Students() {
    const result = useSelector((data: any) =>{
        return data.students.users;
    })
  return (
    <div>
      <h1>Quan li sinh vien</h1>
      <ul>
        {result.map((item: any, index: number) =>{
            return <li key={index}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}
