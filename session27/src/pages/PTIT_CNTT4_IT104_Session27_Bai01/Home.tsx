import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <nav>
        <NavLink style={{color: "white", textDecoration: "none"}} to={"/"}>Home</NavLink>
        <NavLink style={{color: "white", textDecoration: "none"}} to={"/about"}>About</NavLink>
        <NavLink style={{color: "white", textDecoration: "none"}} to={"/contact"}>Contact</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}
