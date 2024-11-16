import React, { useEffect } from "react";
import CommonButton from "./CommonButton";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { removeItems } from "../utilites/localstorage";
import Swal from "sweetalert2";

const SingleBookmark = ({ setBookmarks, data, bookmarks }) => {
  const { _id, bookmarkId, img, title, segment_name } = data;
  AOS.init({
    duration: 1200,
    easing: "ease-in-out",
    once: true,
  });

  const handleRemove = (id) => {
    Swal.fire({
      title: "Remove it?",
      position: "center",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete-bookmark/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.deletedCount > 0) {
              const filter = bookmarks.filter((single) => single._id !== id);
              setBookmarks(filter);
              Swal.fire({
                title: "Removed!",
                position:"center",
                text: "You Removed successfully!.",
                icon: "success"
              });
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

  return (
    <div
      data-aos="fade-right"
      className="grid grid-cols-7 p-2 md:p-4  shadow-md border-2 bg-slate-100 rounded-xl items-center gap-4 md:gap-8"
    >
      <div className="col-span-2">
        <img className="w-[180px] h-[112px]" src={img} alt="" />
      </div>
      <div className="col-span-3">
        <h4 className="font-bold">{segment_name}</h4>
        <h2 className="">{title}</h2>
      </div>
      <div className=" col-span-2 flex justify-end gap-2 md:gap-4">
        <div onClick={() => handleRemove(_id)}>
          <CommonButton>x</CommonButton>
        </div>
        <Link to={`/details/${bookmarkId}`}>
          {" "}
          <CommonButton>
            <FaEye />
          </CommonButton>
        </Link>
      </div>
    </div>
  );
};

export default SingleBookmark;
