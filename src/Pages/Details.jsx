import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const Details = () => {
    const { id } = useParams()
    const alldata = useLoaderData()
    console.log(alldata);
    const selectedData = alldata.filter(single => single.id == id);
    console.log(selectedData)
    
    return (
        
        <div >  
                <div className='container gap-8 mb-6 lg:my-6 lg:grid grid-cols-4 md:px-0 px-2 mx-auto'>
                <div className='col-span-2'>
                     <img src={selectedData[0].img} alt="" />
                </div>
                <div className='col-span-2 mt-4 lg:mt:0 space-y-1'>
                   <span className='flex gap-2 items-center'>
                   <p >Segment Name : </p>
                   <p className='font-semibold'> {selectedData[0].segment_name }</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Title : </p>
                   <p className='font-bold '> { selectedData[0].title}</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Facilities : </p>
                   {/* <p className='font-light '> { selectedData[0].facilities.join(',')}</p> */}
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Area : </p>
                   <p className='font-light '> {selectedData[0].area} (sq ft)</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Status : </p>
                   <p className='font-light '> {selectedData[0].status}</p>
                   </span>
                   
                   <span className='flex gap-2 items-center'>
                   <p >Price : </p>
                   <p className='font-light '> {selectedData[0].price}</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p >Location : </p>
                   <p className='font-light '> { location}</p>
                   </span>
                   
                   <p >Details : <span className='font-light'>{  selectedData[0].description}</span></p>
                </div>
               
            </div>
            
        </div>
    );
};

export default Details;