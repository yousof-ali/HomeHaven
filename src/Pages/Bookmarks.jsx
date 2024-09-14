import React, { useEffect, useState } from 'react';
import { getItems } from '../utilites/localstorage';
import { useLoaderData } from 'react-router-dom';
import { BiColor } from 'react-icons/bi';
import SingleBookmark from '../Components/SingleBookmark';

const Bookmarks = () => {
    const alldata = useLoaderData();
    const [bookmarks ,setBookmarks] = useState([]);

  

    useEffect(() => {
        const localstorage = getItems();
       const data = []
        if(localstorage.length>0){
            for(const i of localstorage){
                const filteedData = alldata.find(single => single.id == i);
                if(filteedData){
                    data.push(filteedData);
                }
            }
        }
        setBookmarks(data);
        
        
    },[])
    
    console.log(bookmarks);

    return (
        <div className='min-h-[70vh]'>
            <div className='container grid my-8 grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 mx-auto px-2'>
            {
                bookmarks.map((single,indx) => <SingleBookmark key={indx} data={single}></SingleBookmark>)
            }
        </div>
        </div>
    );
};

export default Bookmarks;