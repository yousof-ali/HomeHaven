import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Route/Router";
import AuthContext from "./Context/AuthContext";
import {HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="bg-base-100">
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
