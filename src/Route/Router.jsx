import * as React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import PrivateRouter from "./PrivateRouter"
import Home from "../Pages/Home";

import Details from "../Pages/Details";
import Properties from "../Pages/Properties";
import Bookmarks from "../Pages/Bookmarks";
import ErrorPage from "../Pages/ErrorPage";
import SingUp from "../Pages/SingUp";
import Login from "../Pages/Login";
import UpdateProfile from "../Pages/UpdateProfile";
import Account from "../Pages/Account";

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
          path:'/details/:id',
          element:<PrivateRouter> <Details></Details></PrivateRouter> ,
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
          element:<PrivateRouter><UpdateProfile></UpdateProfile></PrivateRouter>
        },
        {
          path:'/account',
          element:<PrivateRouter><Account></Account></PrivateRouter> 
        },
        
      ]
    },
  ]);


export default router;  