import React from 'react';
import CommonButton from '../Components/CommonButton';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-gray-50-50">
        <div className="w-full mx-2 max-w-lg p-8 bg-white shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Login</h2>
          <form >
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
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder='Password'
                
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            <button className='text-blue-600 mb-4 hover:underline'>
                 <p>Forget Password ?</p>
            </button>
            <CommonButton
              type="submit"
              className="w-full px-4 py-2  font-semibold rounded-md shadow-sm "
            >
              Log In
            </CommonButton>
            
          </form>
          <p className="mt-4  text-gray-600">
            No account? <a href="/singUp" className="text-blue-600 hover:underline">Sing Up</a>
          </p>
          <div className="divider">Or</div>
          <div className='flex justify-center items-center gap-4'>
            <p className='text-3xl p-2 rounded-xl  hover:bg-slate-100'>
                <FaGoogle/>
            </p>
            <p className='text-3xl p-2 rounded-xl  hover:bg-slate-100'>
                <FaGithub/>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;