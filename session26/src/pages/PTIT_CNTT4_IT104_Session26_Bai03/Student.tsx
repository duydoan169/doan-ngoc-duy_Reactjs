import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Student() {
    const [search, setSearch]=useState("");
    const [searchParams, setSearchParams]=useSearchParams();
  return (
    <>
        <div style={{display: "flex", gap: "10px"}}>
            <input type="text" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}/>
            <button onClick={()=>setSearchParams({studentName: search})}>Tim kiem</button>
        </div>
        <h1>{searchParams.get("studentName")}</h1>
    </>
  )
}
