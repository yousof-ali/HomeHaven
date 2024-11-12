import React from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ExploreMore = () => {

    const navigate = useNavigate();
  
    const handleClick = (name) =>{
      navigate(`/property/${name}`);
    }

  return (
    <div className="py-8  md:py-12">
      <div className="mb-4">
        <h2 className="text-3xl text-yellow-600 font-Josefin font-bold text-center">
          Explore More{" "}
        </h2>
        <p className="text-center">
          Explore all the different types of apartments so you can choose the
          best option for you
        </p>
      </div>
      <div className="grid container h-[150vh] md:h-[70vh]   mx-auto gap-4 md:grid-cols-4 md:grid-rows-2">
        <div
          onClick={() => handleClick("student-housing")}
          className="mx-2 md:mx-0 cursor-pointer relative zoom-container md:col-span-2 "
        >
          <img className="w-full h-full" src="./collections5.jpg" alt="" />

          <div className=" absolute  bottom-5 right-14 ">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl text-white">Student Housing</h2>
              <span className="text-white  text-2xl">
                <FaChevronCircleRight />
              </span>
            </div>
            <p className="text-white">3 Properties</p>
          </div>
        </div>

        <div
          onClick={() => handleClick('vacation-rentals')}
          className=" mx-2 md:mx-0 cursor-pointer relative zoom-container  "
        >
          <img className="w-full h-full" src="./collections4.jpg" alt="" />

          <div className=" absolute  bottom-5 right-14 md:right-2 ">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl text-white">Vacation Rentals</h2>
              <span className="text-white  text-2xl">
                <FaChevronCircleRight />
              </span>
            </div>
            <p className="text-white">3 Properties</p>
          </div>
        </div>

        <div
          onClick={() => handleClick('townhouse')}
          className=" mx-2 cursor-pointer md:mx-0 relative zoom-container md:row-span-2"
        >
          <img className="w-full h-full" src="./collections3.jpg" alt="" />

          <div className=" absolute  bottom-5 right-14 md:right-2 ">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl text-white">Townhouse</h2>
              <span className="text-white  text-2xl">
                <FaChevronCircleRight />
              </span>
            </div>
            <p className="text-white">4 Properties</p>
          </div>
        </div>

        <div
          onClick={() => handleClick('family-house')}
          className=" mx-2 md:mx-0 cursor-pointer relative  zoom-container  "
        >
          <img className="w-full h-full" src="./collections2.jpg" alt="" />

          <div className=" absolute  bottom-5 right-14 md:right-2 ">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl text-white">Family House</h2>
              <span className="text-white  text-2xl">
                <FaChevronCircleRight />
              </span>
            </div>
            <p className="text-white">4 Properties</p>
          </div>
        </div>

        <div
          onClick={() => handleClick('apartments')}
          className="mx-2 cursor-pointer md:mx-0 relative zoom-container  md:col-span-2"
        >
          <img className="w-full h-full" src="./collections1.jpg" alt="" />

          <div className=" absolute  bottom-5 right-14 ">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl text-white">Apartments</h2>
              <span className="text-white  text-2xl">
                <FaChevronCircleRight />
              </span>
            </div>
            <p className="text-white">3 Properties</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
