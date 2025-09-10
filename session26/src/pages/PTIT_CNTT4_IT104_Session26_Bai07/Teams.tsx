import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import TeamsIndex from './TeamsIndex'
import Team from './Team'

export default function Teams() {
  const routes = createBrowserRouter([
    {
      path: "/teams",
      element: <>
        <h1>Teams</h1>
        <Outlet></Outlet>
      </>,
      children:[
        {
          index: true,
          element: <TeamsIndex></TeamsIndex>
        },
        {
          path: ":teamId",
          element: <Team></Team>
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
