import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import CommonButton from "../Components/CommonButton";
import { getItems, setItems } from "../utilites/localstorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { authProvider } from "../Context/AuthContext";
import Swal from "sweetalert2";
import AOS from "aos";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { user } = useContext(authProvider);
  const [bookmarked,setBookmarked] = useState([]);
  const [bookingBtn,setBookingBtn] = useState(true);
  const [btn,setBtn] = useState(true);
  let email = user?.email;
  if(!email) {
    email = user?.photoURL;
  }


  
  

  useEffect(() => {
    fetch(`https://haven-server-site.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);






  
  useEffect(() => {
    axios.get(`https://haven-server-site.vercel.app/bookmark?email=${email}`,{withCredentials:true})
    .then(data => {
      
      setBookmarked(data.data);
    })
    .catch((err) => {
      console.log(err.message);
    })
  },[data])

  const filter = bookmarked.find(single => single.bookmarkId == data?._id);

  const handleBookmark = (id) => {
    let email = user?.email
    if(!email) {
      email = user?.photoURL
    }
    
    const bookmarkId = id
    const img = data?.img
    const title = data?.title
    const segment_name = data?.segment_name;
    const bookmark = {email,bookmarkId,img,title,segment_name};
     

    fetch('https://haven-server-site.vercel.app/bookmarks',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bookmark)
      
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        Swal.fire({
          icon:'success',
          title:'Bookmarked',
          showConfirmButton:false,
          timer:1500
        })
        setBtn(false);
      };
    })
    .catch((error) => {
      console.log(error.message);
    });
    
  };

  useEffect(() => {
    axios.get(`https://haven-server-site.vercel.app/bookings/person?email=${email}`,{withCredentials:true})
    .then(result => {
      const search = result?.data.filter(single => single.productId == id);
      if(search.length>0){
        setBookingBtn(false)

      }
      
    })
   
  },[id])

  // useEffect(() => {
  //   const ids = id
  //   const localstorage = getItems();
  //   const filter = localstorage.find(single => single == ids);
  //   if(!filter){
  //     setbtn(true);
  //   }

  // },[])

  const handleOrder = (e) => {
    e.preventDefault();
    const from = e.target 
    const name =  from.name.value
    const email = user?.email 
    const productId = data?._id
    const product = data;
    const order = {name,email,productId,product}
    fetch('https://haven-server-site.vercel.app/booking',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(result => {
      if(result.insertedId){
        Swal.fire({
          icon:'success',
          title:'Booking',
          showConfirmButton:false,
          timer:1500
        });
      }
      setBookingBtn(false);
    })
    .catch((err) => {
      console.log(err.message);
    });

  };


  

  return (
    <div className="flex justify-center  items-center">
      <Helmet>
        <title>Haven | Properties | Details</title>
      </Helmet>

      <div className="container  gap-8 mb-6 lg:my-16 my-auto  lg:min-h-[50vh] md:grid md:items-center lg:items-start grid-cols-5 md:px-0 px-2 mx-auto">
        <div className="col-span-3 ">
       
          <img src={data?.img} className="max-h-[500px] w-full" alt="" />
          <h2 className="text-3xl my-4 font-bold font-Josefin text-yellow-600 ">
            Details
          </h2>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Segment Name : </p>
            <p className="font-semibold"> {data?.segment_name}</p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Title : </p>
            <p className="font-bold "> {data?.title}</p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Facilities : </p>
            <p className="font-light "> {data?.facilities?.join(",")}</p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Area : </p>
            <p className="font-light "> {data?.area} (sq ft) </p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Status : </p>
            <p className="font-light "> {data?.status}</p>
          </span>

          <span className="flex gap-2 items-center">
            <p className="font-semibold">Price : </p>
            <p className="font-light "> {data?.price} $ {data?.status == 'Rent'&&'(per day)'}</p>
          </span>
          <span className="flex gap-2 items-center">
            <p className="font-semibold">Location : </p>
            <p className="font-light "> {data?.location}</p>
          </span>

          <p className="font-semibold pb-4">
            Details : <span className="font-light">{data?.description}</span>
          </p>

          { filter?.bookmarkId || !btn?
            <button className="btn border border-orange-600">Bookmarked</button>:<CommonButton className={'block'} onClick={() => handleBookmark(data?._id)}>
            Bookmark
          </CommonButton>
          }

          
          <ToastContainer />
        </div>
        <div className="col-span-2 md:mt-0   space-y-1 ">
          <div className="mb-12">
            <h2 className="text-3xl lg:mt-0  my-4 font-bold text-yellow-600 font-Josefin">
              Explore More
            </h2>
            <div className="space-y-4 lg:w-3/4">
              <li className="list-none boeder cursor-pointer hover:shadow-md hover:border-yellow-600 border-2 hover:rounded-xl border-purple-700">
                <Link to={`/property/${"family-house"}`}>Family Homes</Link>
              </li>
              <li className="list-none boeder  cursor-pointer hover:shadow-md hover:border-yellow-600 border-2 hover:rounded-xl border-purple-700">
                <Link to={`/property/${"apartments"}`}>Apartments</Link>
              </li>
              <li className="list-none boeder  cursor-pointer hover:shadow-md hover:border-yellow-600 border-2 hover:rounded-xl border-purple-700">
                <Link to={`/property/${"student-housing"}`}>
                  Student Housing
                </Link>
              </li>
              <li className="list-none  cursor-pointer hover:shadow-md hover:border-yellow-600 boeder border-2 hover:rounded-xl border-purple-700">
                <Link to={`/property/${"vacation-rentals"}`}>
                  Vacation-rentals
                </Link>
              </li>
              <li className="list-none  cursor-pointer hover:shadow-md hover:border-yellow-600 boeder border-2 hover:rounded-xl border-purple-700">
                <Link to={`/property/${"townhouse"}`}>Townhouse</Link>
              </li>
            </div>
          </div>
          <div
           className="border mt-4 rounded-md md:p-4 p-2 bg-slate-100 ">
            <div className="flex  items-center">
              <img src="/logo.png" className="w-20" alt="" />
              <h2 className="text-2xl font-bold font-Josefin text-yellow-500">
                Haven
              </h2>
            </div>
            <h2 className="text-xl mx-auto lg:w-3/4 text-purple-700  font-bold mt-6">
              Do You Want to{" "}
              <span className="text-yellow-600">Booking</span>?
            </h2>
            <form onSubmit={handleOrder}>
              <div className="form-control mx-auto lg:w-3/4">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  defaultValue={`${user?.displayName}`}
                  className="border p-2 rounded border-black outline-yellow-500"
                  required
                />
              </div>
              <div className="form-control mx-auto lg:w-3/4">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  defaultValue={`${user?.email}`}
                  className="border p-2 rounded border-black outline-yellow-500"
                  required
                />
              </div>
              <div className="flex justify-end items-center gap-4 my-4">
                <p className="text-lg">
                  <span>Price : </span>{" "}
                  <span className="font-bold">{data?.price}$</span>
                </p>
                
                {
                  bookingBtn?<CommonButton >
                  Booking
                </CommonButton>:<button className="p-2 border font-bold border-yellow-600 rounded"> Booked</button>
                }
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
