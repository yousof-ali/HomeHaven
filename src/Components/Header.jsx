import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { MdOutlineMenu } from "react-icons/md";import { RxCross2 } from "react-icons/rx";
import CommonButton from './CommonButton';
import { MdLogin } from "react-icons/md";



const Header = () => {

    const[menu,setmenu] = useState(true);

    const links = (
        <>
        <li>< NavLink to={'/'}>Home</NavLink></li>
        <li>< NavLink to={'/update-profile'}>Update Profile</NavLink></li>
        
        <li>< NavLink to={'/update-profile'}>Account</NavLink></li>
        </>
    )

    const handleMenu = () =>{
        setmenu(!menu)
    }
    return (
        <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div onClick={handleMenu} tabIndex={0} role="button" className="lg:hidden font-semibold mr-2 text-3xl">
        {
            menu?<MdOutlineMenu />:<RxCross2/>
        }
      </div>
      <ul
        tabIndex={0}
        className={`menu z-10 menu-sm ${menu?'hidden':'block'}  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
        {links}
      </ul>
    </div>
    <Link to={'/'} className="text-xl flex items-center">
    <img className='w-14' src="./logo.png" alt="" />
    <h2 className='font-bold text-yellow-600 font-Josefin'>Haven</h2>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to={'./login'}><CommonButton>Login <MdLogin className='' /></CommonButton></Link>
  </div>
</div>
    );
};

export default Header;