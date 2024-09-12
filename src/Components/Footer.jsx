import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-base-200' >
            <div className='max-w-[2000px] py-8 mx-auto px-2  md:px-6  lg:px-8'>
                   <div className='flex  justify-between items-center'>
                    <div className='flex items-center gap-1'>
                        <img className='w-14' src="/logo.png" alt="" />
                        <h2 className='text-2xl font-Josefin text-yellow-600'>Haven</h2>
                    </div>
                    <div className='text-2xl flex gap-4'>
                        <span><FaFacebook /></span>
                        <span><FaTwitter /></span>
                        <span><FaInstagram /></span>
                        <span><FaYoutube /></span>
                    </div>
                   </div>
                   <div className="divider "></div>

                   <div className='space-y-6 md:flex justify-between py-4 md:text-center '>
                    <div className='flex-1'>
                        <h2 className='font-bold md:mt-6 mb-2'>ABOUT</h2>
                        <p > Fusce quis tellus nulla. Donec sodales mauris eget pellentesque hendrerit. Donec molestie non urna sit amet aliquet. Curabitur sit amet est nec nulla varius fermentum.</p>
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-bold mb-2'>CONTACT INFO</h2>
                        <p>Call-centre: 1 (323) 938-5798</p>
                        <p className='my-2'>Fax: 1 (888) 637-7262</p>
                        <p>Email: info@styleixthemes.com</p>
                        <div className='space-y-2 mt-4'>
                            <p>1840 E Garvey Avenue Street</p>
                            <p>Block-D,Bonani,Dhaka,Bangladesh</p>
                            <p>Monday – Friday: 9:00am – 9:00pm</p>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-bold mb-2'>REAL ESTATE MARKERS</h2>
                        <div className='flex space-y-2 flex-col'>
                        <Link> Pricing Plans</Link>
                        <Link>Our Services</Link>
                        <Link>About Us</Link>
                        <Link>Contact Us</Link>
                        <Link className='underline text-blue-700'>More</Link>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2 className='font-bold mb-2'>REAL ESTATE MARKERS</h2>
                        <div className='flex flex-col space-y-2'>
                        <Link> Apartment for Rent</Link>
                        <Link>Apartment Low to hide</Link>
                        <Link>Offices for Buy</Link>
                        <Link>Offices for Rent</Link>
                        <Link className='underline text-blue-700'>More</Link>
                        </div>
                    </div>
                   </div>
                   <div className='divider'></div>
                   <p className='font-bold text-center mt-4 md:mt-8'>&copy; 2024 Your Haven. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;