import React from "react";
import CommonButton from "./CommonButton";

const SingleCard = () => {
  return (
    <div className="card bg-base-100 shadow-md w-96">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="car!"
        />
      </figure>
      <div className="card-body ">
        <p className="text-yellow-600 font-bold">Sell</p>
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <CommonButton>Details</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
