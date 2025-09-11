import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './ProductList'

export default function Bai4() {
    const routes = createBrowserRouter([
        {
            path: "/products",
            element: <ProductList></ProductList>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
