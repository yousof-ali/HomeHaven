import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { MdOutlineMenu } from "react-icons/md";import { RxCross2 } from "react-icons/rx";
import CommonButton from './CommonButton';
import { MdLogin } from "react-icons/md";



const Header = () => {

    const[menu,setmenu] = useState(true);
    const handleReloade=() =>{
      location.reload()
    }

    const links = (
        <>
        <li>< NavLink to={'/'}>Home</NavLink></li>
        <li onClick={handleReloade}>< NavLink to={`/properties/${0}`}>Properties</NavLink></li>
        <li>< NavLink to={'/bookmarks'}>Bookmarks</NavLink></li>
        <li>< NavLink to={'/update-profile'}>Update Profile</NavLink></li>
        
        <li>< NavLink to={'/update-profile'}>Account</NavLink></li>
        <li>< NavLink to={'/login'}>Login</NavLink></li>
        <li>< NavLink to={'/singup'}>SingUp</NavLink></li>
        </>
    )

    const handleMenu = () =>{
        setmenu(!menu)
    }
    return (
        <div className="navbar bg-base-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div onClick={handleMenu}  role="button" className="lg:hidden font-semibold mr-2 text-3xl">
        {
            menu?<MdOutlineMenu />:<RxCross2/>
        }
      </div>
      <ul
        
        className={`menu ${menu?'hidden':'block'} lg:hidden absolute top-8 z-10  bg-base-100 rounded-box  mt-3 w-52 p-2 shadow`}>
        {links}
      </ul>
    </div>
    <Link to={'/'} className="text-xl flex items-center">
    <img className='w-14' src="/logo.png" alt="" />
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