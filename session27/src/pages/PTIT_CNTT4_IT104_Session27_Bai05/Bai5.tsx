import React from 'react'
import { createBrowserRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import PostList from './PostList'
import PostDetail from './PostDetail'

export default function Bai5() {
    const routes = createBrowserRouter([
        {
            path: "/blog",
            element: <div style={{display: "flex", gap: "15px"}}>
                <div style={{width: "20%", height: "1000px", backgroundColor: "#4336d6", color: "white", padding: "20px"}}>
                    <h1>My Blog</h1>
                    <Link style={{color: "white"}} to={"/blog/posts"}>Posts</Link>
                </div>
                <Outlet></Outlet>
            </div>,
            children:[
                {
                    path: "posts",
                    element: <PostList></PostList>
                },
                {
                    path: "posts/:id",
                    element: <PostDetail></PostDetail>
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
