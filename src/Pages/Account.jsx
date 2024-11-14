import React, { useContext } from "react";
import { authProvider } from "../Context/AuthContext";
import CommonButton from "../Components/CommonButton";
import { Link } from "react-router-dom";

const Account = () => {
    const {user} = useContext(authProvider);
    
  return (
    <div className="flex items-center justify-center py-8 min-h-[70vh] bg-gray-50-50">
        
        <div className="w-full mx-2 max-w-lg p-8 bg-white shadow-lg rounded-lg border border-gray-200">
            
              <div className="flex flex-col gap-2 justify-center items-center">
                <div>
                    <img className="w-16 h-16 border-yellow-600 rounded-full border-2" src={user?.photoURL?user.photoURL:'/default-user.jpg'} alt="" />
                </div>
                <h2 className="text-md text-gray-500 font-semibold">{user?.displayName}</h2>
              </div>
              <div className="mt-6 space-y-2">
                 <p><span className="font-bold">Email :</span><span className="text-gray-500"> {user?.email}</span></p>
                 <p><span className="font-bold">Email Status :</span><span className="text-gray-500"> {user?.emailVerified == true? 'Verified':"Not Verified"}</span></p>
                 <p><span className="font-bold">Account Create At :</span><span className="text-gray-500"> {user?.metadata?.creationTime}</span></p>
                 <p><span className="font-bold">Last Login At :</span><span className="text-gray-500"> {user?.metadata?.lastSignInTime}</span></p>
              </div>
              <Link to={'/update-profile'} className="flex justify-end mt-8"><CommonButton>Update Profile</CommonButton></Link>
        </div>
    </div>
  );
};

export default Account;
