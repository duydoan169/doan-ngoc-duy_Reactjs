import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TaskList from './TaskList'
import TaskDetail from './TaskDetail'

export default function Bai3() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <TaskList></TaskList>
        },
        {
            path: "/task/:id",
            element: <TaskDetail></TaskDetail>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
