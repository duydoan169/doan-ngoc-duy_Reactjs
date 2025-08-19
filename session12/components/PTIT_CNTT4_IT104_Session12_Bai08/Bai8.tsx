import React from 'react'
import TableHead from './TableHead'
import TableContent from './TableContent'
const user = [
  { id: 1, name: "Malcolm Lockyer", birthDate: "21/03/1961", gender: "Nam", address: "New York" },
  { id: 2, name: "Maria", birthDate: "11/02/1990", gender: "Nữ", address: "London" },
];
export default function Bai8() {
  return (
    <div>
      <table style={{width: "1000px", height: "150px", border: "1px solid black"}}>
        <thead>
            <TableHead></TableHead>
        </thead>
        <tbody>
            <TableContent user={user[0]}></TableContent>
            <TableContent user={user[1]}></TableContent>
        </tbody>
      </table>
    </div>
  )
}
