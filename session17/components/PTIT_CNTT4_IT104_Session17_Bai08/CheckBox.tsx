import React, { useState } from 'react'

export default function CheckBox() {
    const [value, setValue]=useState<string[]>([])
  return (
    <div>
        <p>So thich: {`[${value}]`}</p>
      <label htmlFor=""><input type="checkbox" value={"Di choi"} onChange={(e)=> e.target.checked ? setValue([...value, e.target.value]) : setValue(value.filter(a => a!=e.target.value))}/>Di choi</label><br />
      <label htmlFor=""><input type="checkbox" value={"Code"} onChange={(e)=> e.target.checked ? setValue([...value, e.target.value]) : setValue(value.filter(a => a!=e.target.value))}/>Code</label><br />
      <label htmlFor=""><input type="checkbox" value={"Boi loi"} onChange={(e)=> e.target.checked ? setValue([...value, e.target.value]) : setValue(value.filter(a => a!=e.target.value))}/>Boi loi</label><br />
      <label htmlFor=""><input type="checkbox" value={"Nhay day"} onChange={(e)=> e.target.checked ? setValue([...value, e.target.value]) : setValue(value.filter(a => a!=e.target.value))}/>Nhay day</label><br />
    </div>
  )
}
