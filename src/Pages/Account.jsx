import React, { useContext } from "react";
import { authProvider } from "../Context/AuthContext";

const Account = () => {
    const {user} = useContext(authProvider);
    
  return (
    <div className="flex items-center justify-center py-8 min-h-[60vh] bg-gray-50-50">
        <div className="w-full mx-2 max-w-lg p-8 bg-white shadow-lg rounded-lg border border-gray-200">
            <h2 className="text-center mb-6 font-bold text-yellow-600">Account</h2>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div>
                    <img className="w-16 h-16 border rounded-full" src={user?.photoURL} alt="" />
                </div>
                <h2 className="text-md text-gray-500 font-semibold">{user?.displayName}</h2>
              </div>
              <div className="mt-6 space-y-2">
                 <p><span className="font-bold">Email :</span><span className="text-gray-500"> {user?.email}</span></p>
                 <p><span className="font-bold">Email Status :</span><span className="text-gray-500"> {user?.emailVerified == true? 'Verified':"Not Verified"}</span></p>
                 <p><span className="font-bold">Account Create At :</span><span className="text-gray-500"> {user?.metadata?.creationTime}</span></p>
                 <p><span className="font-bold">Last Login At :</span><span className="text-gray-500"> {user?.metadata?.lastSignInTime}</span></p>
              </div>
        </div>
    </div>
  );
};

export default Account;
