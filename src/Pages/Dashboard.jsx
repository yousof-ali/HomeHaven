import React, { useState } from 'react';
import DashboardRoute from './Shared/DashboardRoute';
import { Outlet } from 'react-router-dom';
import CommonButton from '../Components/CommonButton';

const Dashboard = () => {
    const [forbtn,setbtn] = useState(false);
    const handleBtn = () => {
        setbtn(!forbtn);
    }
    return (
        <div className='relative '>
            <div className=''>
            <CommonButton onClick={handleBtn}  className='absolute top-0  btn '>{forbtn?'open >':"< close"}</CommonButton>
            </div>
            <div className={`max-w-[1800px] grid grid-cols-5  pt-12 gap-6  mx-auto min-h-[70vh]`}>
            <div className={`col-span-2 md:col-span-1 ${forbtn?'hidden':'block'}` }>
                <DashboardRoute></DashboardRoute>
                
            </div>
            <div className={`${forbtn?'col-span-5 md:col-span-5':'col-span-3 md:col-span-4'} bg-white border  `}>
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;