import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PrivateRouter from './PrivateRouter';
import Account from './Account';
import Login from './Login';

export default function Bai5() {
    const routes = createBrowserRouter([
        {
            path: "/home",
            element: <h1>Home</h1>
        },
        {
            path: "/account",
            element: <PrivateRouter element={<Account></Account>}></PrivateRouter>
        },
        {
            path: "/login",
            element: <Login></Login>
        }
    ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
