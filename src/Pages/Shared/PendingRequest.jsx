import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { MdEdit } from 'react-icons/md';

const PendingRequest = () => {

    const[newEstate,setNewEstate] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/get-newestate')
        .then(res => res.json())
        .then(result => {
            setNewEstate(result);
        })
        .catch((err) => {
            console.log(err.message);
        })
    },[])

    return (
        <div > 
            <h2 className='text-center  bg-gray-200 font-bold py-4 text-3xl text-yellow-600'> Pending Request</h2>
            <div className='overflow-x-auto '>
                <table className='table'>
                    <thead className='bg-black text-white'>
                        <tr>
                            <th>No</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Img</th>
                            
                            <th>Segment Name</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            newEstate.map((single,indx) => (
                                <tr key={indx}className='hover:shadow-md' >
                                    <th>{indx + 1}</th>
                                    <td>{single?.name}</td>
                                    <td><img className='w-12 rounded-full' src={single?.img} alt="" /></td>
                                    <td>{single?.email}</td>
                                    <td>{single?.segment_name}</td>
                                    <td>{single?.status}</td>
                                    <td className='flex gap-4'>
                                    <Link  className='p-1 md:p-2 text-xl bg-yellow-600 text-white rounded' ><FaEye></FaEye></Link>
                                    <button className={`p-1 md:p-2 text-xl bg-green-300 text-white rounded ${single?.requestStatus =="pending"?'flex':'hidden'}`}>{single?.requestStatus =="pending"?'Pending':"Done"}</button>
                                    <button className='p-1 md:p-2 text-xl bg-red-500 text-white rounded'><MdDelete></MdDelete></button>
                                    
                                    </td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default PendingRequest;