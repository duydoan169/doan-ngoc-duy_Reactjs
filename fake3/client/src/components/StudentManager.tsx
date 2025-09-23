/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveStudent } from '../store/slices/studentSlice';

export default function StudentManager() {
    const result = useSelector((data: any) =>{
        return data.students.student;
    })
    const dispatch=useDispatch();
    const [name, setName] = useState<string>("");
    const addStudent=()=>{
        if(name==""){
            alert("khong hop le");
            return;
        }
        dispatch(saveStudent({id: Math.floor(Math.random()*100), name: name}));
    }
  return (
    <div>
      <h1>Quan ly sinh vien</h1>
        <ul>{result.map((student: {id: number, name: string}) =>{
            return <li key={student.id}>{student.name} <button>Xoa</button></li>
        })}</ul>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={()=>{addStudent(); setName("")}}>Them</button>
    </div>
  )
}
