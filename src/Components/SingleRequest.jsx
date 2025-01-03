import React from "react";
import CommonButton from "./CommonButton";
import { Link } from "react-router-dom";

const SingleRequest = ({ data }) => {
  return (
    <div className="card mx-4 md:mx-0 bg-base-100 shadow-md ">
      {/* <img src={data?.img} className='w-full h-40' alt="" /> */}
      <div className="p-4 w-full h-[280px]">
        <img src={data?.img} className="rounded-xl w-full h-full" alt="home" />
      </div>
      <div className="p-4 space-y-2">
        <p className="font-bold text-black">{data?.segment_name}</p>
        <p className="text-gray-500">
          <span className="text-black">Price : </span>
          {data?.price} $ {data?.status == 'Rent'&&'(per day)'}
        </p>
        <p className="text-gray-500">
          <span className="text-black">Status : </span>
          {data?.status}{" "}
        </p>

        <div className="flex justify-end">
          {data?.requestStatus ? (
            <>
              <Link to={`/pending-edit/${data?._id}`}>
                <CommonButton>Edit</CommonButton>
              </Link>
              <p className="p-2 text-gray-400 ml-4 border rounded disabled">
                Pending{" "}
              </p>
            </>
          ) : (
            <Link to={`/details/${data?._id}`}>
              <CommonButton> Details</CommonButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleRequest;
