import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { auth } from '../Context/AuthContext';

const Details = () => {
    const{homeData} = useContext(auth);
    
    
    const{id} = useParams();
    const filteredData = homeData.filter(single => single.id == id)
    const data = filteredData[0];
    console.log(data)
    const {img,title,segment_name,description,area,location,price,status,facilities} = data
    return (
        <div >
            <div className='container gap-8 my-6 lg:grid grid-cols-4 md:px-0 px-2 mx-auto'>
                <div className='col-span-2'>
                     <img src={img} alt="" />
                </div>
                <div className='col-span-2 mt-4 lg:mt:0 space-y-1'>
                   <span className='flex gap-2 items-center'>
                   <p >Segment Name : </p>
                   <p className='font-semibold'> { segment_name}</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Title : </p>
                   <p className='font-bold '> { title}</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Facilities : </p>
                   <p className='font-light '> { facilities.join(',')}</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Area : </p>
                   <p className='font-light '> { area} (sq ft)</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Status : </p>
                   <p className='font-light '> { status}</p>
                   </span>
                   
                   <span className='flex gap-2 items-center'>
                   <p >Price : </p>
                   <p className='font-light '> { price}</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Location : </p>
                   <p className='font-light '> { location}</p>
                   </span>
                   
                   <p >Details : <span className='font-light'>{ description}</span></p>
                   
                   
                </div>
               
            </div>
        </div>
    );
};

export default Details;