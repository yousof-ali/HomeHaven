import React, { useContext, useEffect, useState } from "react";
import { authProvider } from "../Context/AuthContext";
import SingleRequest from "../Components/SingleRequest";
import { Link } from "react-router-dom";
import CommonButton from "../Components/CommonButton";
import axios from "axios";

const MyEstate = () => {
  const [mySalerent, setMysalerent] = useState([]);
  const[booking,setBookings] = useState([]);
  const [aproved, setAproved] = useState([]);
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(true);

  const { user } = useContext(authProvider);


  useEffect(() => {
    axios.get(`https://haven-server-site.vercel.app/bookings/person?email=${user?.email}`,{withCredentials:true})
    .then(result => {
      setBookings(result.data.reverse());
      setLoading(false);
    })
  },[]);


  useEffect(() => {
    axios(`https://haven-server-site.vercel.app/newEstate?email=${user?.email}`,{withCredentials:true})
      .then((result) => {
        const filter = result.data.filter(
          (single) => single.requestStatus == "pending"
        );
        console.log(filter);

        setMysalerent(filter.reverse());
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    fetch(`https://haven-server-site.vercel.app/aproved?email=${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setAproved(result.reverse());
        setLoad(false);
      });
  }, []);
  return (
    <div className=" bg-slate-200 min-h-[80vh]">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl text-center text-yellow-600 font-bold font-Josefin">
          My Properties
        </h1>
        <p className="text-center">
          Here is your all proparty that you sale and rent and also you can add
          a new your proparty
        </p>
        
        <div className="my-12">
          <h2 className="text-center text-3xl font-bold font-Josefin text-yellow-600 mb-4">Booking</h2>
          {load && (
                <p className="text-center text-2xl pt-12">
                  <span className="loading loading-spinner text-error"></span>
                </p>
              )}
              {booking?.length < 1 && !loading && (
                <>
                  <p className="text-center font-bold">You have no Booking</p>
                  <p className="mt-8 text-center te">
                    Do you want to booking now?
                  </p>
                  <div className="flex justify-center mt-4">
                    <Link to={"/properties"}>
                      <CommonButton>Booking</CommonButton>
                    </Link>
                  </div>
                </>
              )}

          <div className="grid grid-cols- 1 md:grid-cols-2 lg:grid-cols-4 gap-6  items-center justify-center mx-auto">
                {booking?.map((single, indx) => (
                  <SingleRequest data={single.product} key={indx}></SingleRequest>
                ))}
            </div>
          

        </div>
        <div className="divider"></div>

        <div className="grid md:gap-6 md:grid-cols-3">
          
          
          <div className=" mx-2 col-span-2  md:mx-0 mt-6 ">
          <h2 className="text-center text-3xl font-bold font-Josefin text-yellow-600">Your Post</h2>
          <div className="flex md:hidden justify-end md:mt-0 mt-2">
          <Link to={"/sell-rent-my-proparties"}>
            <CommonButton>Add New ?</CommonButton>
          </Link>
        </div>
            <div className=" min-h-[30vh] ">
              <h2 className="text-xl text-yellow-600 mb-4 font-bold text-left ">
                Aproved Request
              </h2>
              {load && (
                <p className="text-center text-2xl pt-12">
                  <span className="loading loading-spinner text-error"></span>
                </p>
              )}
              {aproved?.length < 1 && !load && (
                <p className="text-center font-bold">You have no post yet.</p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                {aproved?.map((single, indx) => (
                  <SingleRequest data={single} key={indx}></SingleRequest>
                ))}
              </div>
            </div>
            <div className="divider flex py-4 "></div>
            <div className=" border p-4   min-h-[30vh]">
              <h2 className="text-xl mb-4 text-left  font-bold text-yellow-600 ">
                {" "}
                Pending Request
              </h2>
              {loading && (
                <p className="text-center text-2xl pt-12">
                  <span className="loading loading-spinner text-error"></span>
                </p>
              )}
              {mySalerent?.length < 1 && !loading && (
                <>
                  <p className="text-center font-bold">You have no Request</p>
                  <p className="mt-8 text-center te">
                    Do you want to sale or rent your proparties?
                  </p>
                  <div className="flex justify-center mt-4">
                    <Link to={"/sell-rent-my-proparties"}>
                      <CommonButton>Sale & Rent</CommonButton>
                    </Link>
                  </div>
                </>
              )}
              <div className="grid  grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {mySalerent?.map((single, indx) => (
                  <SingleRequest data={single} key={indx}></SingleRequest>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="divider  py-4 ">fh</div> */}
          <div className="col-span-1 mt-16 mx-4 md:mx-0">
            <div>
              <h2 className="text-xl mb-4 ml-4 text-left  font-bold text-yellow-600 ">
                {" "}
                Request for Sale & Rent Proparty
              </h2>
              <div className=" border shadow-xl border-yellow-600    p-4 rounded bg-slate-50 ">
                <div className="flex mb-6  items-center">
                  <img src="/logo.png" className="w-20" alt="" />
                  <h2 className="text-2xl font-bold font-Josefin text-yellow-500">
                    Haven
                  </h2>
                </div>
                <h2 className="text-xl font-bold ">
                  Sale or Rent your Proparty ?
                </h2>
                <p className="py-2">
                  If you have real estate . And you want to sale and rent. Add a
                  any kind of Properties
                </p>
                <div className="relative mt-4 mx-auto ">
                  <img
                    className="rounded"
                    src={"https://i.ibb.co.com/Ptq6pN4/home5.jpg"}
                    alt=""
                  />
                  <div className="bg-black top-0 h-full w-full bg-opacity-40 absolute">
                  </div>
                  
                </div>
                <div className=" flex justify-end mt-8">
                    <Link to={"/sell-rent-my-proparties"}>
                      <CommonButton>Add your proparty</CommonButton>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEstate;
