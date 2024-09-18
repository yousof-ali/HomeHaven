import React, { useContext, useState } from 'react';
import CommonButton from '../Components/CommonButton';
import { authProvider } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const{user,updateNamePhoto} = useContext(authProvider);
    
    const [error,setError] = useState("");

    const handleSingUp = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value

        updateNamePhoto(name,photo)
        .then(() => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Profile Sucessfully updated!",
                showConfirmButton: false,
                timer: 1500
              });
        });
        
        
    };
    return (
        <div className="flex py-8 items-center justify-center min-h-[80vh] bg-gray-50">
            <Helmet>
          <title>Haven | Update-Profile</title>
        </Helmet>
        <div className="w-full mx-2 max-w-lg p-8 bg-white shadow-lg rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-yellow-600 mb-6 text-center">Update Profile</h2>

          <div className='mb-6 flex items-center gap-2'>
            <p className=" text-sm font-medium text-gray-600">Email : </p>
            <p className=" text-sm font-medium text-black tex">{user?.email} </p>
          </div>
          <form onSubmit={handleSingUp}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Full Name'
                defaultValue={user?.displayName}
                
                className="mt-1 block w-full px-4 py-3 border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
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
                defaultValue={user?.photoURL}
               
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
            
            <p className='mb-2  text-sm text-red-600'>{error&&<span className='flex items-center gap-1'>{error}<MdErrorOutline /></span>}</p>
            <CommonButton
              type="submit"
              className="w-full px-4 py-2  font-semibold rounded-md shadow-sm "
            >
              Update
            </CommonButton>
          </form>
          
        </div>
      </div>
    );
};

export default UpdateProfile;