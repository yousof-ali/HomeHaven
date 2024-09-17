import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';



export const authProvider = createContext();
const AuthContext = ({children}) => {
    const[loader,setLoader] = useState(true);
    const[user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider()
    
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
        setLoader(true);
        return signOut(auth);
    }

    const logIn = (email,password) => {
         setLoader(true)
         return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }

    const value={loader,createUser,user,logOut,logIn,googleLogin}
    return (
        <authProvider.Provider value={value}>
           {children} 
        </authProvider.Provider>
    );
};

export default AuthContext;