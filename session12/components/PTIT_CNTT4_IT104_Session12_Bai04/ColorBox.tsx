import React from 'react'

export default function ColorBox() {
  return (
    <div style={{margin: "10px", display: "flex", gap: "10px"}}>
      <div style={{display: "flex", justifyContent: "center", backgroundColor: "red", alignItems: "center", width: "200px", height: "200px"}}>
        <div>Box</div>
      </div>
      <div style={{display: "flex", justifyContent: "center", backgroundColor: "green", alignItems: "center", width: "200px", height: "200px"}}>
        <div>Box</div>
      </div>
      <div style={{display: "flex", justifyContent: "center", backgroundColor: "blue", alignItems: "center", width: "200px", height: "200px"}}>
        <div>Box</div>
      </div>
    </div>
  )
}
