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
import Segment from "../Pages/Segment";
import Dashboard from "../Pages/Dashboard";
import Users from "../Pages/Shared/Users";
import AllEstate from "../Pages/AllEstate";
import PendingRequest from "../Pages/Shared/PendingRequest";
import Order from "../Pages/Shared/Order";
import SellRent from "../Pages/SellRent";
import PendingDetails from "../Pages/PendingDetails";
import AprovedRequest from "../Pages/Shared/AprovedRequest";
import MyEstate from "../Pages/MyEstate";
import Addnew from "../Pages/Shared/Addnew";
import Edit from "../Pages/Shared/Edit";
import PendingEdit from "../Pages/PendingEdit"; 

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
          loder:({params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path:'/properties',
          element:<Properties></Properties>
        },
        {
          path:'/property/:id',
          element:<Segment></Segment>
        },
        {
          path:'/bookmarks',
          element:<PrivateRouter><Bookmarks></Bookmarks></PrivateRouter>,
          // loader:() => fetch('http://localhost:5000/homes')
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
        {
          path:'/sell-rent-my-proparties',
          element:<PrivateRouter><SellRent></SellRent></PrivateRouter>
        },
        {
         path:'pending-edit/:id',
         element:<PrivateRouter><PendingEdit></PendingEdit></PrivateRouter>
        },
        {
          path:'/my-estate',
          element:<PrivateRouter><MyEstate></MyEstate></PrivateRouter>
        },
        {
          path:'/dashboard',
          element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
          children:[
            {
              path:'all-user',
              element:<Users></Users>
            },
            {
              path:'all-estate',
              element:<AllEstate></AllEstate>
            },
            {
              path:'add-new',
              element:<Addnew></Addnew>
            },
            {
              path:'pending-request',
              element:<PendingRequest></PendingRequest>
            }
            ,
            {
              path:'order',
              element:<Order></Order>
            },
            {
              path:'pending-request/pending-details/:id',
              element:<PendingDetails></PendingDetails>
            },
            {
              path:'aprove-request',
              element:<AprovedRequest></AprovedRequest>
            },
            {
              path:'aprove-request/aprove-details/:id',
              element:<PendingDetails></PendingDetails>
            }  ,
            {
              path:'all-estate/edit/:id',
              element:<Edit></Edit>
            }

          ],
         
        }
        
      ]
    },
  ]);


export default router;  