import React, { useState } from 'react';
import CommonButton from '../Components/CommonButton';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const SingUp = () => {
    
    const [hide,setHide] = useState(true);

    const handleSingUp = (e) =>{
        e.preventDefault();
        const form = e.target

        const email = form.email.value
        const name = form.name.value
        const photo = form.photo.value
        const password = form.password.value

        console.log(name,email,photo,password);
    }

    const hidePassword = () =>{
        setHide(!hide);
    }


    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-gray-50">
        <div className="w-full mx-2 max-w-lg p-8 bg-white shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Create Your Account</h2>
          <form onSubmit={handleSingUp}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Full Name'
                
                className="mt-1 block w-full px-4 py-3 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Email'
               
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-600">Photo URL</label>
              <input
                type="url"
                id="photo"
                name="photo"
                placeholder='Photo URL'
               
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
             <div className='flex gap-2 justify-center items-center'>
             <input
                type={`${hide?"password":"text"}`}
                id="password"
                name="password"
                placeholder='Password'
                
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
              <div className='text-2xl mr-3 ' onClick={hidePassword}>
                   {
                    hide?<FaEye />:<FaEyeSlash />
                   }
              </div>
             </div>
            </div>
            <CommonButton
              type="submit"
              className="w-full px-4 py-2  font-semibold rounded-md shadow-sm "
            >
              Sign Up
            </CommonButton>
          </form>
          <p className="mt-4  text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>
          </p>
        </div>
      </div>
    );
    
};

export default SingUp;