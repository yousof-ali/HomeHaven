import * as React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home";
import Estate from "../Pages/Estate";
import Details from "../Pages/Details";
import Properties from "../Pages/Properties";
import Bookmarks from "../Pages/Bookmarks";
import ErrorPage from "../Pages/ErrorPage";
import SingUp from "../Pages/SingUp";
import Login from "../Pages/Login";
import UpdateProfile from "../Pages/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/all/:id',
          element:<Estate></Estate>
        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loder:() => fetch('/alldata.json')
        },
        {
          path:'/properties/:id',
          element:<Properties></Properties>
        },
        {
          path:'/bookmarks',
          element:<Bookmarks></Bookmarks>,
          loader:() => fetch('/alldata.json')
        },
        {
          path:'/singUp',
          element:<SingUp></SingUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/update-profile',
          element:<UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);


export default router;  