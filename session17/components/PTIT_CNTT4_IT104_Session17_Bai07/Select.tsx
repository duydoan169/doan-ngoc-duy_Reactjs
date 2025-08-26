import React, { useState } from 'react'

export default function Select() {
    const [option, setOption]=useState<string>("")
  return (
    <div>
        <p>Thanh pho: {option}</p>
      <select name="" id="" onChange={e => setOption(e.target.value)}>
        <option value="" selected disabled hidden>Chon thanh pho</option>
        <option value="Ha Noi">Ha Noi</option>
        <option value="Thanh Hoa">Thanh Hoa</option>
        <option value="Ha Nam">Ha Nam</option>
        <option value="Nghe An">Nghe An</option>
      </select>
    </div>
  )
}
