/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'

export default function Bai1() {
    const result = useSelector((data: any) =>{
        return data.bai1.user;
    })
  return (
    <div>
        <h2>Thong tin ca nhan</h2>
        <p>Id: {result.id}</p>
        <p>Name: {result.name}</p>
        <p>Gender: {result.gender}</p>
        <p>Birthdate: {result.birthDate}</p>
        <p>Adress: {result.address}</p>
    </div>
  )
}
