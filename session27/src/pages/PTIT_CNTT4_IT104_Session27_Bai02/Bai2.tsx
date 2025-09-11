import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

export default function Bai2() {
    const routes = createBrowserRouter([
        {
            path: "/products",
            element: <>
                <header style={{display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", color: "white", backgroundColor: "dodgerblue", height: "100px"}}>
                    <h1>Trang chi tiet san pham</h1>
                    <p>Danh sach san pham</p>
                </header>
                <Outlet></Outlet>
            </>,
            children: [
                {
                    index: true,
                    element: <ProductList></ProductList>
                },
                {
                    path: ":id",
                    element: <ProductDetail></ProductDetail>
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
