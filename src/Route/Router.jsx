import * as React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Estate from "../Pages/Estate";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/all/:id',
          element:<Estate></Estate>
        }
      ]
    },
  ]);


export default router;  