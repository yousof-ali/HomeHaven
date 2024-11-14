import React, { useState } from "react";
import DashboardRoute from "./Shared/DashboardRoute";
import { Outlet } from "react-router-dom";
import CommonButton from "../Components/CommonButton";
import { MdOutlineMenu } from "react-icons/md";

const Dashboard = () => {
  const [forbtn, setbtn] = useState(false);
  const handleBtn = () => {
    setbtn(!forbtn);
  };
  return (
    <div className=" ">
      <div
        className={`max-w-[1800px] relative grid grid-cols-5 pt-8 gap-2 md:gap-4  pb-8 overflow-y-auto  mx-auto h-[80vh]`}
      >
        <button
          onClick={handleBtn}
          className={'absolute left-0 top-0 p-1 bg-yellow-600 text-white font-bold rounded'}
        >
          {forbtn?'Menu >':'< Close'}
        </button>

        <div
          className={`col-span-2 md:col-span-1 ${forbtn ? "hidden" : "block"}`}
        >
          <DashboardRoute></DashboardRoute>
        </div>
        <div
          className={`${
            forbtn ? "col-span-5 md:col-span-5" : "col-span-3  md:col-span-4"
          } bg-white border   `}
        >
          <Outlet></Outlet>
          <button
          onClick={handleBtn}
          className={`absolute top-0 ${
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
