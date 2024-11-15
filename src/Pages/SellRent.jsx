import React, { useContext, useState } from "react";
import { authProvider } from "../Context/AuthContext";
import CommonButton from "../Components/CommonButton";
import Swal from "sweetalert2";

const SellRent = () => {
  const { user } = useContext(authProvider);
  const [segment,setSegment] = useState('Single Family Homes');
  const [statuss,setStatus] = useState('Sale');

  const handleChangeCategory = (e) => {
    setSegment(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };


  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target
    const img = form.photo.value
    const title = form.title.value
    const requestStatus = 'pending'
    const segment_name = segment
    const description = form.description.value
    const price = parseInt(form.price.value);
    const status = statuss
    const area = parseInt(form.area.value);
    const location = form.location.value
    let facilitiess = form.facilities.value
    const facilities = facilitiess.split(/\s+/)
    
    const email = user?.email
    const name = user?.displayName
    const newEstate = {
        img,
        title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        email,
        name,
        requestStatus
      }
    fetch('http://localhost:5000/sale-rent-request',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newEstate)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result)
        if(result.insertedId){
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your request is pending",
                showConfirmButton: false,
                timer: 1500,
              });
            form.reset()
        }
    })
    .catch((err) => {
        console.log(err.message)
    })
  };
  
 

  
  return (
    <div className="min-h-[80vh] container mx-auto my-6">
      <h1 className="text-3xl text-center font-bold font-Josefin text-yellow-600">
        Sale & Rent Your Proparty
      </h1>
      <p className="text-center">
        You can sale or rent your any proparties.Give information of your
        proparties and request for sale or rent.
      </p>

      <div className="max-w-[1200px] shadow-xl mx-2 border-yellow-600 bg-slate-200 md:mx-auto mt-6 rounded p-6 md:p-10 border-2">
        <div className="flex items-center mb-4">
          <img src="/logo.png" className="w-20" alt="" />
          <h2 className="text-2xl font-bold font-Josefin text-yellow-500">
            Haven
          </h2>
        </div>
        <form onSubmit={handleRequest} className="  ">
          <div className="flex gap-6 flex-col md:flex-row w-full">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded border-black  outline-yellow-500"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded border-black outline-yellow-500"
                defaultValue={user?.email}
                required
              />
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row w-full">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text ">Proparty Name</span>
              </label>
              <input
                type="text"
                placeholder="Proparty Name"
                name="title"
                className="border p-2 rounded border-black  outline-yellow-500"
                required
              />
            </div>
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select 
              className="p-2 rounded border border-black outline-yellow-600"
               name=""
                id=""
                onChange={handleChangeCategory}
                >
                <option  value="Single Family Homes"> Single Family Homes</option>
                <option  value="Townhouse"> Townhouse</option>
                <option  value="Vacation Rentals"> Vacation Rentals</option>
                <option  value="Apartment"> Apartment</option>
                <option  value="Student Housing"> Student Housing</option>
                <option  value="Apartment"> Apartment</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row w-full">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text ">Photo</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Proparty Photo"
                className="border p-2 rounded border-black  outline-yellow-500"
                required
              />
            </div>
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                placeholder="Details"
                name="description"
                className="border p-2 rounded border-black outline-yellow-500"
                required
              />
            </div>
          </div>
          
          <div className="flex gap-6 flex-col md:flex-row w-full">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text ">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                name="location"
                className="border p-2 rounded border-black  outline-yellow-500"
                required
              />
            </div>
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text">Facilities</span>
              </label>
              <input
                type="text"
                name="facilities"
                placeholder="living room , kitchen , swimming pool etc."
                className="border p-2 rounded border-black outline-yellow-500"
                required
              />
            </div>
          </div>

          <div className="flex gap-6 flex-col md:flex-row w-full">
          <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text">Area</span>
              </label>
              <input
                type="number"
                name="area"
                placeholder="Area (sq)"
                className="border p-2 rounded border-black outline-yellow-500"
                required
              />
            </div>
            <div className="form-control flex flex-row  gap-4 items-center   md:w-1/2">
            <div >
              <label className="label">
                <span className="label-text ">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Price $"
                className="border p-2 rounded border-black  outline-yellow-500"
                required
              />
            </div>
            <div>
            <label className="label">
                <span className="label-text ">Status</span>
              </label>
            <select onChange={handleChangeStatus}
            className="p-2 rounded border  border-black outline-yellow-600" name="" id="">
            <option  value="Sale"> Sale</option>
            <option  value="Rent"> Rent</option>
            </select>
            </div>
            </div>
            

          </div>
         <div className=" flex justify-end mt-8">
         <CommonButton>Request</CommonButton>
         </div>
        </form>
      </div>
    </div>
  );
};

export default SellRent;
