import React, { createContext, useEffect, useState } from 'react';

export const auth = createContext();
const AuthContext = ({children}) => {
    const[loader,setLoader] = useState(true);
    const[homeData,setHomeData] = useState([]);

    useEffect(() => {
        fetch('/homedata.json')
        .then(res => res.json())
        .then(data => {
            setHomeData(data)
        })
        .catch((e) => {
            console.log(e.message);
        })
    } ,[])

    const value={homeData}
    return (
        <auth.Provider value={value}>
           {children} 
        </auth.Provider>
    );
};

export default AuthContext;