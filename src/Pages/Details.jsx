import React, {  useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CommonButton from '../Components/CommonButton';
import { getItems, setItems } from '../utilites/localstorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';



const Details = () => {
   
    const { id } = useParams();
    const [datas,setDatas] = useState([]);
   
    
    useEffect(() => {
         fetch('/alldata.json')
         .then(res => res.json())
         .then(alldata => {
            setDatas(alldata);
         })
    },[]);

    const filtered = datas.filter(single => single.id == id);
       
    const handleBookmark = (id) =>{
        const confirm = setItems(id);
        if (confirm){
           toast("Bookmarked !");

        }
        else {
            toast("Already bookmarked");
        }
    }
    
    return (
        
        <div className='flex justify-center  items-center' >  
        <Helmet>
          <title>Haven | Properties | Details</title>
        </Helmet>
        
                <div className='container gap-8 mb-6 lg:my-16 my-auto  lg:min-h-[50vh] md:grid md:items-center lg:items-start grid-cols-4 md:px-0 px-2 mx-auto'>
                <div className='col-span-2'>
                     <img src={filtered[0]?.img} alt="" />
                </div>
                <div className='col-span-2 mt-4 lg:mt:0 space-y-1'>
                    <h2 className='text-3xl font-bold text-yellow-600 '>Details</h2>
                   <span className='flex gap-2 items-center'>
                   <p className='font-semibold' >Segment Name : </p>
                   <p className='font-semibold'> {filtered[0]?.segment_name }</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p className='font-semibold' >Title : </p>
                   <p className='font-bold '> { filtered[0]?.title}</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p className='font-semibold'  >Facilities : </p>
                   <p className='font-light '> { filtered[0]?.facilities.join(',')}</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p className='font-semibold' >Area : </p>
                   <p className='font-light '> {filtered[0]?.area} (sq ft) </p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p className='font-semibold'  >Status : </p>
                   <p className='font-light '> {filtered[0]?.status}</p>
                   </span>
                   
                   <span className='flex gap-2 items-center'>
                   <p className='font-semibold' >Price : </p>
                   <p className='font-light '> {filtered[0]?.price}</p>
                   </span>
                   <span className='flex gap-2 items-center'>
                   <p className='font-semibold' >Location : </p>
                   <p className='font-light '> { filtered[0]?.location}</p>
                   </span>
                   
                   <p className='font-semibold pb-4' >Details : <span className='font-light'>{  filtered[0]?.description}</span></p>

                   <CommonButton  onClick={()=>handleBookmark(filtered[0]?.id)}>Bookmark</CommonButton>
                   <ToastContainer />
                </div>
               
            </div>
            
        </div>
    );
};

export default Details;