import React, { useEffect, useState } from 'react';
import SingleCard from '../../Components/SingleCard';

const RecentEstate = () => {
    const [recentData,setRecentData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/homes')
        .then(res => res.json())
        .then(result => {
            setRecentData(result);
        })
    },[])
    return (
        <div className="py-8 md:py-12 px-2  max-w-[2000px] mx-auto bg-slate-100">
        <div className="mb-4">
          <h2 className="text-3xl text-yellow-600 font-Josefin font-bold text-center">
           Recent Estate{" "}
          </h2>
          <p className="text-center">
            Search over 2000 properties to rent from the top agents in the
            country
          </p>
        </div>
        {recentData?.length < 1 && (
        <p className="text-center text-2xl pt-24">
          <span className="loading loading-spinner text-error"></span>
        </p>
      )}
        <div className="container grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center mx-auto">
          {
            recentData.slice(0,6).map(singledata => <SingleCard key={singledata._id} singledata={singledata}></SingleCard>)
          }
        </div>
      </div>
    );
};

export default RecentEstate;