import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './Bai1.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function Bai1() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home></Home>,
            children: [
                {
                    index: true,
                    element: <>
                        <h1 style={{textAlign: "center"}}>Trang chu</h1>
                        <p style={{textAlign: "center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, fugiat.</p>
                    </>
                },
                {
                    path: "about",
                    element: <About></About>
                },
                {
                    path: "contact",
                    element: <Contact></Contact>
                }
            ]
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
