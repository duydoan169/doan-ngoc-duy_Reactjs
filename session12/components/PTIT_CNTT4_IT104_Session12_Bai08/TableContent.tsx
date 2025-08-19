import React from 'react'
type User={
    id: number;
    name: string;
    birthDate: string;
    gender: string;
    address: string;
}
export default function TableContent({user}: {user: User}) {
  return (
    <tr>
        <td style={{textAlign: "center"}}>{user.id}</td>
        <td style={{textAlign: "center"}}>{user.name}</td>
        <td style={{textAlign: "center"}}>{user.birthDate}</td>
        <td style={{textAlign: "center"}}>{user.gender}</td>
        <td style={{textAlign: "center"}}>{user.address}</td>
        <td style={{textAlign: "center"}}>
            <button style={{width: "50px", height: "40px", border: "0"}}>Sua</button>
            <button style={{backgroundColor: "tomato", color: "white",width: "50px", height: "40px", border: "0"}}>Xoa</button>
        </td>
    </tr>
  )
}
