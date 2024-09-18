import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authProvider } from '../Context/AuthContext';

const PrivateRouter = ({children}) => {
    const location = useLocation();
    
    const {user,loader} = useContext(authProvider);
    if(loader){
        return <p className="text-center text-2xl pt-24"><span className="loading loading-spinner text-error"></span></p>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to ={'/login'}></Navigate>
         
    
};

export default PrivateRouter;