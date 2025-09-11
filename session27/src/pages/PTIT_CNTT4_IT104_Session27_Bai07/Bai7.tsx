import React from 'react'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'

export default function Bai7() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element:<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Day la trang chu</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, distinctio!</p>
                <Link to={"/about"}>About</Link>
            </div>
        },
        {
            path: "/about",
            element:<div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h1>Day la trang gioi thieu</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, distinctio!</p>
                <Link to={"/"}>Home</Link>
            </div>
        },
        {
            path: "*",
            element: <div style={{width: "100%", height: "500px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <h1>Trang ban dang tim khong ton tai</h1>
                <p>co the duong dan ban nhap sai hoac trang da duoc di chuyen</p>
                <Link to={"/"}>Quay ve trang chu</Link>
            </div>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
