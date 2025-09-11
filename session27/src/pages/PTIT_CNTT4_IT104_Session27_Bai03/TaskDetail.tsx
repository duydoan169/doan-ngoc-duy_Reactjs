import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { tasks } from './TaskList';
export default function TaskDetail() {
    const {id} = useParams();
    const target = tasks.find((item) => item.id==Number(id));
    const navigate = useNavigate()
  return (
    <div style={{textAlign: "center"}}>
      <h2>{target?.title}</h2>
      <p>{target?.description}</p>
      <button style={{color: "white", backgroundColor: "dodgerblue", border: "none", width: "75px", height: "25px", borderRadius: "5px"}} onClick={()=>navigate(`/`)}>Quay lai</button>
    </div>
  )
}
