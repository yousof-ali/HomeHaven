import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';



export const authProvider = createContext();
const AuthContext = ({children}) => {
    const[loader,setLoader] = useState(true);
    const[user,setUser] = useState(null);
    
    const createUser = (email,password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const userStateChange = onAuthStateChanged(auth,currentUser => {
            setLoader(false);
            setUser(currentUser);
        })
        return userStateChange;
    },[])

    const logOut = () =>{
        setLoader(false);
        return signOut(auth);
    }

    const value={loader,createUser,user,logOut}
    return (
        <authProvider.Provider value={value}>
           {children} 
        </authProvider.Provider>
    );
};

export default AuthContext;