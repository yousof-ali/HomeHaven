import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllEstate = () => {
  const [allEstate, setAllEstate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://haven-server-site.vercel.app/homes")
      .then((res) => res.json())
      .then((result) => {
        setAllEstate(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete?",
      position: "center",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://haven-server-site.vercel.app/delete-estate/${id}`, {
          method: "Delete",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              const filt = allEstate.filter((single) => single._id !== id);
              setAllEstate(filt);
              Swal.fire({
                title: "Deleted!",
                position: "center",
                text: "Delete successfully!.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="relative">
      <h2 className="text-center bg-gray-200  font-bold py-4 text-3xl text-yellow-600">
        {" "}
        All Estate
      </h2>
      {loading && (
        <p className="absolute text-2xl top-44 left-1/2">
          <span className="loading loading-spinner text-error"></span>
        </p>
      )}
      <div className="overflow-x-auto ">
        <table className="table">
          <thead className="bg-black text-white">
            <tr>
              <th>No</th>
              <th>Img</th>
              <th>Segment Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allEstate.map((single, indx) => (
              <tr key={indx} className="hover:shadow-md">
                <th>{indx + 1}</th>
                <td>
                  <img className="w-12" src={single?.img} alt="" />
                </td>
                <td>{single.segment_name}</td>
                <td>{single.status}</td>
                <td className="flex gap-4">
                  <Link
                    to={`/details/${single?._id}`}
                    className="p-1 md:p-2 text-xl bg-yellow-600 text-white rounded"
                  >
                    <FaEye></FaEye>
                  </Link>
                  <Link
                    to={`edit/${single?._id}`}
                    className="p-1 md:p-2 text-xl bg-green-300 text-white rounded"
                  >
                    <MdEdit></MdEdit>
                  </Link>
                  <button
                    onClick={() => handleDelete(single?._id)}
                    className="p-1 md:p-2 text-xl bg-red-500 text-white rounded"
                  >
                    <MdDelete></MdDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEstate;
