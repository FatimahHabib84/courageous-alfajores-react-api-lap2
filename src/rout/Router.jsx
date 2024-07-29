import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from '../pages/Home';
import Info from '../pages/Info';

function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/Info/:id",
          element: <Info/>
        }
      ]);


  return (
    <RouterProvider router={router} />
  )
}

export default Router