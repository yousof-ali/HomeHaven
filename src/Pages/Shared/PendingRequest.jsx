import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const PendingRequest = () => {
  const [newEstate, setNewEstate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/get-newestate")
      .then((res) => res.json())
      .then((result) => {
        const filterOnlyPending = result.filter(
          (single) => single?.requestStatus == "pending"
        );
        setNewEstate(filterOnlyPending.reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="relative">
      <h2 className="text-center  bg-gray-200 font-bold py-4 text-3xl text-yellow-600">
        {" "}
        Pending Request
      </h2>
      {newEstate?.length < 1 && !loading && (
        <h3 className="text-center top-40 left-1/3 absolute mt-4 text-xl font-semibold">
          Empty Pending List !
        </h3>
      )}
      {loading && (
        <p className="absolute text-2xl top-32 left-1/2">
          <span className="loading loading-spinner text-error"></span>
        </p>
      )}

      <div className="overflow-x-auto ">
        <table className="table">
          <thead className="bg-black text-white">
            <tr>
              <th>No</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Img</th>

              <th>Segment Name</th>
              <th>Status</th>
              <th>Request Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {newEstate.map((single, indx) => (
              <tr key={indx} className="hover:shadow-md">
                <th>{indx + 1}</th>
                <td>{single?.name}</td>
                <td>{single?.email}</td>
                <td>
                  <img className="w-16 h-8 " src={single?.img} alt="" />
                </td>

                <td>{single?.segment_name}</td>
                <td>{single?.status}</td>
                <td>{single?.requestStatus}</td>
                <td className="flex gap-4">
                  <Link
                    to={`pending-details/${single?._id}`}
                    className={`p-1 md:p-2  text-xl bg-yellow-600 text-white rounded`}
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

export default PendingRequest;
