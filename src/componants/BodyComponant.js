import React from 'react'
import LoginComponant from './LoginComponant'
import BrowseComponant from './BrowseComponant'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const BodyComponant = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LoginComponant />
        },
        {
            path: "/browse",
            element: <BrowseComponant />
        },

    ])
    return (
        <div>
            <RouterProvider router={appRouter}>

            </RouterProvider>
        </div>
    )
}

export default BodyComponant
