import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay }
 from "swiper/modules";
 import { FaChevronRight } from "react-icons/fa";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Link } from "react-router-dom";
import CommonButton from "../Components/CommonButton";


const Home = () => {
  return (
    <div>
      <div className="max-w-[1700px] mx-auto">
        <Swiper
          
          modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay ={{delay: 3000}}
        >
          <SwiperSlide>
            <img
              className="w-full relative h-[40vh] md:h-[50vh] lg:h-[80vh]"
              src="/i.webp"
              alt=""
            />
            <div className="absolute  top-0 bg-opacity-40 bg-black w-full h-full">
                <div className="flex w-full text-white flex-col h-full items-center justify-center">
                
                <h4 className='font-Josefin'>Best Way to find your</h4>
                <h1 className="text-3xl text-yellow-600 font-Josefin  font-bold">Family Homes</h1>
                <p className=" max-w-[80%] lg:max-w-[60%] text-center">
                These are standalone houses designed for one family.
                </p>
                <Link className="mt-4"><CommonButton>Explore More <FaChevronRight /></CommonButton></Link>
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
                 
                 <h4 className='font-Josefin'>Best Way to find your</h4>

                <h1 className="text-3xl text-yellow-600 font-Josefin  font-bold"> Dream Apartments</h1>
                <p className=" max-w-[80%] lg:max-w-[60%] text-center">
                Apartments are ideal for those seeking lower maintenance living and often include .
                </p>
                <Link className="mt-4"><CommonButton>Explore More <FaChevronRight /></CommonButton></Link>
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
                <h4 className='font-Josefin '>Best Way to find your</h4>
                <h1 className="text-3xl text-yellow-600 font-Josefin  font-bold"> Vacation Rentals</h1>
                <p className=" max-w-[80%] lg:max-w-[60%] text-center">
                These are short-term rental properties used for holidays or vacations.
                </p>
                <Link className="mt-4"><CommonButton>Explore More <FaChevronRight /></CommonButton></Link>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
