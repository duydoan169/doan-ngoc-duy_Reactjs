import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
type User={
  email: string,
  password: string,
  role: string
}
export default function Login() {
  const navigate=useNavigate();
  const [user]=useState<User>({email: "user@gmail.com", password: "123", role: "admin"});
  const [input, setInput]=useState<User>({email: "", password: "", role: "user"});
  const handleChange=(e: (React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>))=>{
    const {value, name}=e.target;
    setInput({...input, [name]: value});
  }
  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(input.email!=user.email || input.password!=user.password || input.role!=user.role){
      alert("Thong tin khong chinh xac");
      return;
    }
    alert("Dang nhap thanh cong");
    navigate("/account");
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Dang nhap</h1>
        <input type="text" name='email' placeholder='Nhap email' value={input.email} onChange={handleChange}/> <br />
        <input type="text" name='password' placeholder='Nhap mat khau' value={input.password} onChange={handleChange}/> <br />
        <select name="role" id="" value={String(input.role)} onChange={handleChange}>
          <option value="" selected hidden disabled>Chon quyen</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select> <br />
        <button>Dang nhap</button>
      </form>
    </div>
  )
}
