import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";

import doctor from "../../assets/testimonial/doctor.jpg"
import engineer from "../../assets/testimonial/engineer.jpg"
import busniess from "../../assets/testimonial/busniess.jpg"


const Customer = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='bg-gradient-to-tl  max-w-[2000px] mx-auto from-red-300 to-[#73c1e6] px-8 py-12'>
            <h1 className='text-4xl text-center font-bold text-yellow-600 font-Josefin'>Our Customer Review</h1>
            <p className='text-center mb-6 mx-2 w-full md:w-1/2 md:mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <div>
            <Slider {...settings}>
                <div className='bg-base-100  p-4 py-6 rounded-md'>
                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className='flex text-xl my-4 gap-2 text-orange-400'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    </div>
                    <div className='flex justify-end items-center gap-4'>
                    <div className=''>
                        <h2 className='font-semibold text-2xl'> Dr. Marry</h2>
                        <p className='font-semibold text-gray-500'>Doctor</p>
                        </div>
                        <img className='w-24 rounded-full' src={doctor} alt="" />
                        
                    </div>
                </div>
                <div className='bg-base-100 rounded-md py-6 p-4'>
                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className='flex text-xl my-4 gap-2 text-orange-400'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    </div>
                    <div className='flex justify-end items-center gap-4'>
                    <div className=''>
                        <h2 className='font-semibold text-2xl'>David Welly</h2>
                        <p className='font-semibold text-gray-500'>Enginner</p>
                        </div>
                        <img className='w-24 rounded-full' src={engineer} alt="" />
                        
                    </div>
                </div>
                <div className='bg-base-100 p-4 py-6 rounded-md'>
                 <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <div className='flex text-xl my-4 gap-2 text-orange-400'>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    <span><FaStar /></span>
                    </div>
                    <div className='flex justify-end items-center gap-4'>
                    <div className=''>
                        <h2 className='font-semibold text-2xl'>Karim Rahman</h2>
                        <p className='font-semibold text-gray-500'>Busniessman</p>
                        </div>
                        <img className='w-24 rounded-full' src={busniess} alt="" />
                        
                    </div>
                </div>
                </Slider>
            </div>
            
        </div>
    );
};

export default Customer;