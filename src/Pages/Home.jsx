import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { FaChevronRight } from "react-icons/fa";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Link } from "react-router-dom";
import CommonButton from "../Components/CommonButton";
import { MdOutlineHomeWork } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { TbDatabaseDollar } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SingleCard from "../Components/SingleCard";
import { Helmet } from "react-helmet-async";



const Home = () => {
  const navigate = useNavigate();
  const[recentData,setRecentData]=useState([]);

  
  



  const handleClick = (id) =>{
    navigate(`/properties/${id}`)
  }
  AOS.init({
    duration: 1200,
    easing: "ease-in-out",
    once: true,
  });

  useEffect(() =>{
    fetch('/homedata.json')
    .then(res => res.json())
    .then(data => {
      setRecentData(data)
    })
  },[])

  console.log(recentData.length)

  return (
    <div>
      <div className="max-w-[2000px] mx-auto">
        <Helmet>
          <title>Haven | Home</title>
        </Helmet>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <img
              className="w-full relative h-[40vh] md:h-[50vh] lg:h-[80vh]"
              src="/i.webp"
              alt=""
            />
            <div className="absolute  top-0 bg-opacity-40 bg-black w-full h-full">
              <div className="flex w-full text-white flex-col h-full items-center justify-center">
                <h4 className="font-Josefin">Best Way to find your</h4>
                <h1 className="text-4xl text-yellow-600 font-Josefin  font-bold">
                  Family Homes
                </h1>
                <p className=" max-w-[80%] lg:max-w-[60%] text-center">
                  These are standalone houses designed for one family.
                </p>
                <Link to={`/properties/${0}`}>
                  <CommonButton className={"mt-4 md:mt-6"}>
                    Explore More <FaChevronRight />
                  </CommonButton>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full relative h-[40vh] md:h-[50vh] lg:h-[80vh]"
              src="/home2.jpg"
              alt=""
            />
            <div className="absolute  top-0 bg-opacity-40 bg-black w-full h-full">
              <div className="flex text-white w-full flex-col h-full items-center justify-center">
                <h4 className="font-Josefin">Best Way to find your</h4>

                <h1 className="text-4xl text-yellow-600 font-Josefin  font-bold">
                  {" "}
                  Dream Apartments
                </h1>
                <p className=" max-w-[80%] lg:max-w-[60%] text-center">
                  Apartments are ideal for those seeking lower maintenance
                  living and often include .
                </p>
                <Link  to={`/properties/${0}`}>
                  <CommonButton className={"mt-4 md:mt-6"}>
                    Explore More <FaChevronRight />
                  </CommonButton>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[40vh] md:h-[50vh] lg:h-[80vh]"
              src="./home1.jpg"
              alt=""
            />
            <div className="absolute text-white  top-0 bg-opacity-40 bg-black w-full h-full">
              <div className="flex w-full flex-col h-full items-center justify-center">
                <h4 className="font-Josefin ">Best Way to find your</h4>
                <h1 className="text-4xl text-yellow-600 font-Josefin  font-bold">
                  {" "}
                  Vacation Rentals
                </h1>
                <p className=" max-w-[80%] lg:max-w-[60%] text-center">
                  These are short-term rental properties used for holidays or
                  vacations.
                </p>
                <Link to={`/properties/${0}`}>
                  <CommonButton className={"mt-4 md:mt-6"}>
                    Explore More <FaChevronRight />
                  </CommonButton>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="py-8 md:py-12 px-2  max-w-[2000px] mx-auto bg-slate-100">
        <div className="mb-4">
          <h2 className="text-3xl text-yellow-500 font-Josefin font-bold text-center">
           Recent Estate{" "}
          </h2>
          <p className="text-center">
            Search over 2000 properties to rent from the top agents in the
            country
          </p>
        </div>
        <div className="container grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center mx-auto">
          {
            recentData.map(singledata => <SingleCard key={singledata.id} singledata={singledata}></SingleCard>)
          }
        </div>
      </div>

      <div className="py-8 md:py-12">
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
          <div  onClick={()=>handleClick(1)} className="mx-2 md:mx-0 cursor-pointer relative zoom-container md:col-span-2 ">
            <img className="w-full h-full" src="./collections5.jpg" alt="" />

            <div  className=" absolute  bottom-5 right-14 ">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl text-white">Student</h2>
                <span className="text-white  text-2xl">
                  <FaChevronCircleRight />
                </span>
              </div>
              <p className="text-white">6 Properties</p>
            </div>
          </div>

          <div  onClick={()=>handleClick(2)} className=" mx-2 md:mx-0 cursor-pointer relative zoom-container  ">
            <img className="w-full h-full" src="./collections4.jpg" alt="" />

            <div className=" absolute  bottom-5 right-14 md:right-2 ">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl text-white">Vacation Rentals</h2>
                <span className="text-white  text-2xl">
                  <FaChevronCircleRight />
                </span>
              </div>
              <p className="text-white">7 Properties</p>
            </div>
          </div>

          <div   onClick={()=>handleClick(3)} className=" mx-2 cursor-pointer md:mx-0 relative zoom-container md:row-span-2">
            <img className="w-full h-full" src="./collections3.jpg" alt="" />

            <div className=" absolute  bottom-5 right-14 md:right-2 ">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl text-white">Student Housing</h2>
                <span className="text-white  text-2xl">
                  <FaChevronCircleRight />
                </span>
              </div>
              <p className="text-white">5 Properties</p>
            </div>
          </div>
         
         <div onClick={()=>handleClick(4)} className=" mx-2 md:mx-0 cursor-pointer relative  zoom-container  ">
            <img className="w-full h-full" src="./collections2.jpg" alt="" />

            <div className=" absolute  bottom-5 right-14 md:right-2 ">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl text-white">Family House</h2>
                <span className="text-white  text-2xl">
                  <FaChevronCircleRight />
                </span>
              </div>
              <p className="text-white">7 Properties</p>
            </div>
          </div>
         

          
          <div onClick={()=>handleClick(5)} className="mx-2 cursor-pointer md:mx-0 relative zoom-container  md:col-span-2">
            <img className="w-full h-full" src="./collections1.jpg" alt="" />

            <div  className=" absolute  bottom-5 right-14 ">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl text-white">Townhouse</h2>
                <span className="text-white  text-2xl">
                  <FaChevronCircleRight />
                </span>
              </div>
              <p className="text-white">4 Properties</p>
            </div>
          </div>
          
        </div>
      </div>

      <div className="my-12">
        <div className=" md:flex items-center container mx-auto gap-4 lg:gap-12">
          <div
            className=" flex-1 py-8 "
            style={{
              backgroundImage: "url(https://i.ibb.co.com/J2hn7ff/bac.jpg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className=" flex md:justify-end justify-center lg:mr-8">
              <div className="hero-content  flex-col ">
                <div className="text-center lg:text-left">
                  <h1 className="text-3xl font-bold font-Josefin text-yellow-600">
                    Real Estate Inquiry Form
                  </h1>
                </div>
                <div
                  data-aos="fade-down-right"
                  className=" rounded bg-base-100 w-full max-w-sm shrink-0 "
                >
                  <form className=" card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Inquiry Type</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Inquiry Type"
                        className="border p-2 rounded border-black outline-yellow-500"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label>
                        <span className="label-text font-bold">
                          Personal Info
                        </span>
                      </label>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text ">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name"
                        className="border p-2 rounded border-black outline-yellow-500"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="border p-2 rounded border-black outline-yellow-500"
                        required
                      />
                    </div>
                    <div className=" form-control">
                      <div className="flex gap-2 justify-center">
                        <input
                          className="border w-full border-black p-2 rounded mt-3 outline-yellow-500"
                          type="text"
                          placeholder="Max Price"
                        />
                        <input
                          className="border w-full border-black p-2 rounded mt-3 outline-yellow-500"
                          type="text"
                          placeholder="Minimum size (sq)"
                        />
                      </div>
                    </div>
                    <div className="form-control mt-6">
                      <CommonButton>Submit</CommonButton>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 mx-2 md:mx-0 my-10 ">
            <div className="mb-10">
              <h2 className="text-3xl text-yellow-600 font-Josefin text-center font-bold">
                Why Choose Us
              </h2>
              <p className="text-center">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>

            <div
              data-aos="fade-up-left"
              className="space-y-10 border-purple-600 shadow-md shadow-purple-800 rounded p-4 border-2"
            >
              <div className="flex  items-center gap-3 md:gap-6">
                <div className="text-6xl text-purple-700">
                  <MdOutlineHomeWork />
                </div>
                <div>
                  <h2 className="text-2xl mb-1 font-bold">
                    Wide Range of Properties
                  </h2>
                  <p>
                    With a robust selection of popular properties on hand, as
                    well as leading properties from real estate experts.
                  </p>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-6">
                <div className="text-6xl text-purple-700">
                  <TbDatabaseDollar />
                </div>
                <div>
                  <h2 className="text-2xl mb-1 font-bold">
                    Financing Made Easy
                  </h2>
                  <p>
                    Our stress-free finance department that can find financial
                    solutions to save you money.
                  </p>
                </div>
              </div>
              <div className="flex  items-center gap-3 md:gap-6">
                <div className="text-6xl text-purple-700">
                  <PiUsersThree />
                </div>
                <div>
                  <h2 className="text-2xl mb-1 font-bold">
                    Thrusted by Thousands
                  </h2>
                  <p>
                    10 new offers every day. 350 offers on site, trusted by a
                    community of thousands of users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
