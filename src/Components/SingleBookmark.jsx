import React from "react";
import CommonButton from "./CommonButton";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { removeItems } from "../utilites/localstorage";

const SingleBookmark = ({setBookmarks, data,bookmarks }) => {
  const { id, img, title, segment_name } = data;
  AOS.init({
    duration: 1200,
    easing: "ease-in-out",
    once: true,
  });

  const handleRemove = (id) => {
     removeItems(id);
    const filtered = bookmarks.filter(single => single.id !== id);
     setBookmarks(filtered);
  };

  return (
    <div
      data-aos="fade-right"
      className="grid grid-cols-7 p-2 md:p-4  shadow-md border-2 bg-slate-100 rounded-xl items-center gap-4 md:gap-8"
    >
      <div className="col-span-2">
        <img src={img} alt="" />
      </div>
      <div className="col-span-3">
        <h4 className="font-bold">{segment_name}</h4>
        <h2 className="">{title}</h2>
      </div>
      <div className=" col-span-2 flex justify-end gap-2 md:gap-4">
        <div onClick={()=>handleRemove(id)}>
          <CommonButton>x</CommonButton>
        </div>
        <Link to={`/details/${id}`}>
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
