    import React from 'react'
    import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Student from './Student';

    export default function Bai3() {
        const routes = createBrowserRouter([
            {
                path: "/student",
                element: <Student></Student>
            }
        ])
    return (
        <div>
        <RouterProvider router={routes}></RouterProvider>
        </div>
    )
    }
