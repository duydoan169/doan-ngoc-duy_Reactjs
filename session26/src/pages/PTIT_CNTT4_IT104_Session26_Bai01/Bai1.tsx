import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ProductDetail from './ProductDetail'

export default function Bai1() {
    const routes = createBrowserRouter([
        {
            path: "/product",
            element: <h1>Product</h1>
        },
        {
            path: "/product/:id",
            element: <ProductDetail></ProductDetail>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}
