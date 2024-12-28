import React, { useState } from "react";
import CommonButton from "../../Components/CommonButton";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

const Addnew = () => {
  const [segment, setSegment] = useState("Single Family Homes");
  const [statuss, setStatus] = useState("Sale");
  const navigate = useNavigate();
  const handleChangeCategory = (e) => {
    setSegment(e.target.value);
  };
  

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target
    const img = form.photo.value
    const title = form.title.value
    const segment_name = segment
    const description = form.description.value
    const price = parseInt(form.price.value);
    const status = statuss
    const area = parseInt(form.area.value);
    const location = form.location.value
    let facilitiess = form.facilities.value
    const facilities = facilitiess.split(/\s+/);
    const newEstate = {img,title,segment_name,description,price,status,area,location,facilities};
    
    fetch('https://haven-server-site.vercel.app/addnew-estate',{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newEstate)
    })
    .then(res => res.json())
    .then(result => {
        console.log(result);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Added new estate",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset()
          navigate('/dashboard/all-estate')
          
    })
    .catch((err) => {
        console.log(err.message)
    })
  };
  return (
    <div className="">
      <h2 className="text-center bg-gray-200  font-bold py-4 text-3xl text-yellow-600">
        Add new Estate
      </h2>

      <div className="overflow-x-auto    bg-gray-200 rounded p-6 md:p-10 border-2">
        <div className="flex mb-4  items-center">
          <img src="/logo.png" className="w-20" alt="" />
          <h2 className="text-2xl font-bold font-Josefin text-yellow-500">
            Haven
          </h2>
        </div>
        <form onSubmit={handleAdd} className=" space-y-4 py-5  ">
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
                <option value="Single Family Homes">
                  {" "}
                  Single Family Homes
                </option>
                <option value="Townhouse"> Townhouse</option>
                <option value="Vacation Rentals"> Vacation Rentals</option>
                <option value="Apartment"> Apartment</option>
                <option value="Student Housing"> Student Housing</option>
                <option value="Apartment"> Apartment</option>
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
              <div>
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
                <select
                  onChange={handleChangeStatus}
                  className="p-2 rounded border  border-black outline-yellow-600"
                  name=""
                  id=""
                >
                  <option value="Sale"> Sale</option>
                  <option value="Rent"> Rent</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" flex justify-end ">
            <CommonButton>Add</CommonButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addnew;
