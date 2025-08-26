import React, { useState } from 'react'

export default function Toggle() {
    const [isHidden, setIsHidden]=useState<boolean>(true)
  return (
    <div>
      <button onClick={()=>setIsHidden(!isHidden)}>{isHidden ? "Hien" : "An"}</button>
      <div style={{display: `${isHidden ? "none" : "block"}`}}>Tieu de van ban</div>
    </div>
  )
}
