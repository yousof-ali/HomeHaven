import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardRoute = () => {
    return (
        <div className='bg-slate-200 rounded-md h-full py-4 md:px-4'>
            <ul className='dasboard-ul space-y-2' >
                <li className='w-full '>
                <NavLink className={'block  bg-slate-100 hover:border   hover:border-black p-2'} to={'all-user'}>Users</NavLink>
                </li>
                <li className='w-full '>
                <NavLink className={'block  bg-slate-100 hover:border   hover:border-black p-2'} to={'all-estate'}>All Estate</NavLink>
                </li>
                <li className='w-full '>
                <NavLink className={'block  bg-slate-100 hover:border   hover:border-black  p-2'} to={'pending-request'}>Pending</NavLink>
                </li>
                <li className='w-full '>
                <NavLink className={'block  bg-slate-100 hover:border   hover:border-black  p-2'} to={'order'}>Order</NavLink>
                </li>
               
            </ul>
        </div>
    );
};

export default DashboardRoute;