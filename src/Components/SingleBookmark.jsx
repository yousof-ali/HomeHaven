import React from 'react';
import CommonButton from './CommonButton';
import { Link } from 'react-router-dom';

const SingleBookmark = ({data}) => {
    const {id,img,title,segment_name} = data
    console.log(id)
    return (
        <div className='grid grid-cols-7 p-2 md:p-4  shadow-md border-2 bg-slate-100 rounded-xl items-center gap-4 md:gap-8'>
            <div className='col-span-2'>
               <img src={img} alt="" />
            </div>
            <div className='col-span-3'>
                <h4 className='font-bold'>{segment_name}</h4>
                <h2 className=''>{title}</h2>
            </div>
            <div className=' col-span-2 flex justify-end gap-2 md:gap-4'>
                <CommonButton>x</CommonButton>
               <Link to={`/details/${id}`}> <CommonButton>Details</CommonButton></Link>
            </div>
        </div>
    );
};

export default SingleBookmark;