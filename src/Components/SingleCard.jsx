import React from "react";
import CommonButton from "./CommonButton";
import { Link } from "react-router-dom";


const SingleCard = ({singledata}) => {
  const{_id,img,title,segment_name,status,price}=singledata
  return (
    <div className="card mx-4 md:mx-0 bg-base-100 shadow-md  ">
      <figure>
        <img
          src={img}
          alt="home"
        />
      </figure>
      <div className=" p-4 space-y-1">
      <div className="flex gap-4 justify-start">
        <p className="text-white rounded p-1 bg-green-500 text-sm">{status}</p>
        </div>
        
        <p className="font-bold">{segment_name}</p>
        
        <h2 className="card-title text-yellow-600">{title}</h2>
        
        <p className="pt-2"><span className="font-bold ">Price:</span> {price} $</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}><CommonButton>Details</CommonButton></Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
