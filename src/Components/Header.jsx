import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import { MdOutlineMenu } from "react-icons/md";import { RxCross2 } from "react-icons/rx";
import CommonButton from './CommonButton';
import { MdLogin } from "react-icons/md";
import { authProvider } from '../Context/AuthContext';
import { IoIosLogOut } from "react-icons/io";
import Swal from 'sweetalert2';
import { FaRegBookmark } from 'react-icons/fa';



const Header = () => {
    
  const{user,logOut} = useContext(authProvider);
  const navigate = useNavigate();
  const [forBookmarks,setForBookmarks] = useState(false);

  const handleBookmarks = () => {
    setForBookmarks(true);
  }
  
  
  // const {displayName,photoURL
  // } = user

    const[menu,setmenu] = useState(true);
    
    
    const handleLogOut = () =>{
      Swal.fire({
        title: "Log Out?",
        position:'center',
        text: "Do you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log Out!"
      }).then((result) => {
         if (result.isConfirmed) {
          logOut();
          Swal.fire({
            title: "Log Out!",
            position:"center",
            text: "You log out successfully!.",
            icon: "success"
          });
          navigate('/')
        };
      });
    };

    const links = (
        <>
        <li>< NavLink to={'/'}>Home</NavLink></li>
        <li>< NavLink to={`/properties`}>Properties</NavLink></li>
        {
          user?<>
          <li>< NavLink to={'/my-estate'}>My Estate</NavLink></li>
        <li>< NavLink to={'/account'}>Account</NavLink></li>
    
        <li>< NavLink to={'/dashboard'}>Dashboard</NavLink></li>
          </>:<>
          <li>< NavLink to={'/login'}>Login</NavLink></li>
        <li>< NavLink to={'/singup'}>Sign Up</NavLink></li>
          </>
        }
        </>
    )

    const handleMenu = () =>{
        setmenu(!menu);
        
    }
    
    return (
        <div className="navbar max-w-[2000px] mx-auto bg-base-200">
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
  <div className="navbar-end  md:gap-2">
    {
      user && (
        <>
        <Link to={'/bookmarks'}>
       <div title='Bookmarks' onClick={handleBookmarks}  className={`text-2xl ${forBookmarks?'text-yellow-600':'text-black'} hover:text-yellow-600 mr-3 lg:mr-4 `}>
            <FaRegBookmark></FaRegBookmark>
       </div>
       </Link>
       <Link to={'/account'}>
       <div className='w-8 h-8 mr-3 lg:mr-4 outline rounded-full'>
          {user.photoURL ?
           (<img title={user.displayName} alt='user' className='rounded-full h-8 w-8' src={user.photoURL}
            />):(<img title={user.displayName} alt='user' className='rounded-full h-8 w-8' src='/default-user.jpg'
              />)}
        </div>
       </Link>
       
        </>
      )
    }

    {
      user?<CommonButton onClick={handleLogOut}>Log Out <IoIosLogOut className='' /></CommonButton>:
      <Link to={'./login'}><CommonButton>Login <MdLogin className='' /></CommonButton></Link>
    }
    
  </div>
</div>
    );
};

export default Header;