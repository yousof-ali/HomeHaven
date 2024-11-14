import React, { useState } from "react";
import DashboardRoute from "./Shared/DashboardRoute";
import { Outlet } from "react-router-dom";
import CommonButton from "../Components/CommonButton";

const Dashboard = () => {
  const [forbtn, setbtn] = useState(false);
  const handleBtn = () => {
    setbtn(!forbtn);
  };
  return (
    <div className=" ">
      <div
        className={`max-w-[1800px] relative grid grid-cols-5 pt-4  pb-8   mx-auto min-h-[70vh]`}
      >
        <button
          onClick={handleBtn}
          className={`absolute top-1/2 ${
            forbtn ? "left-0" : "hidden"
          }  p-1 bg-yellow-600 text-white font-bold rounded`}
        >
          {forbtn && " >"}
        </button>

        <div
          className={`col-span-2 md:col-span-1 ${forbtn ? "hidden" : "block"}`}
        >
          <DashboardRoute></DashboardRoute>
        </div>
        <div
          className={`${
            forbtn ? "col-span-5 md:col-span-5" : "col-span-3 relative md:col-span-4"
          } bg-white border ml-4  `}
        >
          <Outlet></Outlet>
          <button
          onClick={handleBtn}
          className={`absolute top-1/2 ${
            !forbtn ? "-left-7" : "hidden"
          }  p-1 bg-yellow-600 text-white font-bold rounded`}
        >
          {!forbtn && " <"}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
