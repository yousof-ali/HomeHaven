import React, { useContext, useEffect, useState } from 'react';
import { useToast } from 'react-toastify';
import { authProvider } from '../../Context/AuthContext';

const Users = () => {
    const [allUsers,setAllUsers] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(result => {
            setAllUsers(result);
            
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[])
  
    
    return (
        <div>
            <h2 className='text-center  font-bold py-4 text-3xl text-yellow-600'>Users</h2>
            <div className='overflow-x-auto '>
                <table className='table'>
                    <thead className='bg-black text-white'>
                        <tr>
                            <th>No</th>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Email Status</th>
                            <th>Creation Time</th>
                            <th>Last Login</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((single,indx) => (
                                <tr key={indx}className='hover:shadow-md' >
                                    <th>{indx + 1}</th>
                                    <td><img className='w-12 h-12 rounded-full' src={single.photoURL} alt="" /></td>
                                    <td>{single.displayName}</td>
                                    <td>{single.email}</td>
                                    <td>{`${single.emailStatus?"verified":"Not Verified"}`}</td>
                                    <td>{single.creationTime}</td>
                                    <td>{single.lastSignInTime}</td>
                                    
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Users;