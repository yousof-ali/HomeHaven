import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { MdOutlineMenu } from "react-icons/md";import { RxCross2 } from "react-icons/rx";



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
        <nav className='bg-base-200 '>
            <div className='flex px-3 py-2 mx-auto max-w-[1600px] justify-between items-center'>
                <div className='flex relative justify-center items-center gap-4 '>
                    <div onClick={handleMenu} className='text-3xl md:hidden'>
                    {
                        menu ? <MdOutlineMenu /> : <RxCross2 />
                    }
                    </div>
                    <Link className='flex justify-center items-center text-yellow-500 text-xl font-semibold' to={'/'}>
                    <img  className='w-16' src="/logo.png" alt=""  />
                    <h2>HomeHaven</h2>
                    </Link>
                    <div className= {`absolute p-4  bg-base-200 top-12 md:hidden bg-opacity-50 backdrop-blur-md ${menu?"hidden":"flex"} -left-5`}>
                        <ul>
                            {links}
                        </ul>
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex  gap-2 font-semibold justify-center items-center'>
                        {links}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;