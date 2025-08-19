import React from 'react'

export default function UserInfo() {
    const user={
        name: "Nguyen Van A",
        gender: "male",
        birthDate: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuan, Ha Noi",
    }
  return (
    <div>
      <h2>thong tin ca nhan</h2>
      <ul>
        <li>Ho va ten: <strong>{user.name}</strong></li>
        <li>Gioi tinh: <strong>{user.gender}</strong></li>
        <li>Ngay sinh: <strong>{user.birthDate}</strong></li>
        <li>Email: <strong>{user.email}</strong></li>
        <li>Dia chi: <strong>{user.address}</strong></li>
      </ul>
    </div>
  )
}
