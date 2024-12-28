import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Order = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    axios(`https://haven-server-site.vercel.app/all-bookings`,{withCredentials:true})
      .then((result) => {
        setData(result.data.reverse());
        setLoading(false);
        console.log(result)
      })
      .catch((err) => {
        console.log(err.message)
      })
      
  }, []);
  return (
    <div className="relative">
      <h2 className="text-center bg-gray-200 font-bold py-2 text-3xl text-yellow-600">
        Order
      </h2>
      {data?.length < 1 && !loading && (
        <h3 className="text-center top-40 left-1/3 absolute mt-4 text-xl font-semibold">
          Empty Pending List !
        </h3>
      )}
      {loading && (
        <p className="absolute text-2xl top-32 left-1/2">
          <span className="loading loading-spinner text-error"></span>
        </p>
      )}
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-black text-white">
            <tr>
              <th>No</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Img</th>

              <th>Proparty Type</th>
              <th>Status</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((single, indx) => (
              <tr key={indx} className="hover:shadow-md">
                <th>{indx + 1}</th>
                <td>{single?.name}</td>
                <td>{single?.email}</td>
                <td>
                  <img className="w-16 h-8" src={single?.product.img} alt="" />
                </td>

                <td>{single?.product.segment_name}</td>
                <td>{single?.product.status}</td>
                <td>{single?.product.price} $</td>
                <td className="flex gap-4">
                  <Link
                    to={`/details/${single?.product._id}`}
                    className="p-1 md:p-2  text-xl bg-yellow-600 text-white rounded"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
