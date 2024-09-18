import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig';



export const authProvider = createContext();
const AuthContext = ({children}) => {
    const[loader,setLoader] = useState(true);
    const[user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    
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

    const gitHubLogin = () => {
        setLoader(true);
        return signInWithPopup(auth,gitHubProvider)
    }

    const updateNamePhoto = (name,photoUrl) => {
        setLoader(true);
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
        })
    }

    const value={loader,createUser,user,logOut,logIn,googleLogin,gitHubLogin,updateNamePhoto}
    return (
        <authProvider.Provider value={value}>
           {children} 
        </authProvider.Provider>
    );
};

export default AuthContext;